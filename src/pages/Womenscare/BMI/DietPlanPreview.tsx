import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DietPlanPDF from "./DietPlanPDF";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import { googleTranslateAPI } from "../../../redux/slices/doctor/doctorService";

interface DietPlanPreviewProps {
  showModal: boolean;
  onClose: () => void;
  selectedWeekData: any;
}

const DietPlanPreview: React.FC<DietPlanPreviewProps> = ({
  showModal,
  onClose,
  selectedWeekData: weekData,
}) => {
  const [selectedWeekData, setSelectedWeekData] = useState<any>(weekData || []);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  useEffect(() => {
    setSelectedWeekData(weekData);
  }, [weekData]);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const dispatch = useDispatch();

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
  ];

  const translateField = async (text: string, to: string): Promise<string> => {
    try {
      const res = (await dispatch(
        googleTranslateAPI({
          query: text,
          targetLang: to,
        })
      )) as any;
      return res?.payload?.translatedText;
    } catch (error) {
      console.error(
        `Error translating text "${text}" to language "${to}":`,
        error
      );
      return text; // Fallback to original text in case of error.
    }
  };

  const handleLanguageChange = async (languageCode: string) => {
    setSelectedLanguage(languageCode);
    initiateTranslation(languageCode);
    toast.info(
      `Language changed to ${
        languageOptions.find((opt) => opt.value === languageCode)?.label
      }`
    );
  };

  const translateWeekDietData = async (weekData: any, targetLang: any) => {
    const translatedData = {} as any;
    setIsLoader(true);
    for (const [day, meals] of Object.entries(weekData)) {
      translatedData[day] = {};
      for (const [mealType, items] of Object.entries(meals as any)) {
        try {
          const translatedItems = await Promise.all(
            (items as any[]).map(async (item: any) => {
              return await translateField(item, targetLang);
            })
          );
          translatedData[day][mealType] = translatedItems;
        } catch (error) {
          console.error(`Error translating ${mealType} on ${day}:`, error);
          translatedData[day][mealType] = items; // Fallback to original if translation fails
        }
      }
    }
    setIsLoader(false);
    return translatedData;
  };

  const initiateTranslation = async (selectedLanguage: any) => {
    console.log("selectedWeekData : ", selectedWeekData);
    const translated = await translateWeekDietData(
      selectedWeekData,
      selectedLanguage
    );
    console.log("translated : ", translated);

    setSelectedWeekData(translated);
  };

  return (
    <Modal show={showModal} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Diet Plan Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          {isLoader && <Loader />}
          <div style={{ marginBottom: "1rem" }}>
            <Select
              showSearch
              placeholder="Choose Language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              style={{ width: "100%" }}
              options={languageOptions}
              optionFilterProp="label"
              getPopupContainer={(trigger) => trigger.parentNode}
              filterOption={(input: string, option: any) =>
                option.label.toLowerCase().includes(input.toLowerCase())
              }
            />
          </div>
          <DietPlanPDF selectedWeekData={selectedWeekData} />
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DietPlanPreview;
