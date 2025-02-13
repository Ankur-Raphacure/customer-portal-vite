import { PDFViewer } from "@react-pdf/renderer";
import { Button, Select } from "antd";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { googleTranslateAPI } from "../../redux/slices/doctor/doctorService";
import InvoicePdfDocument from "./InvoicePdfDocument";

const InvoicePreview = ({
  data,
  showPreviewModal,
  setShowPreviewModal,
}: any) => {
  const dispatch = useDispatch();

  const [translatedData, setTranslatedData] = useState<any>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const languageOptions = [
    { value: "en", label: "English" },
    // { value: "gu", label: "Gujarati" },
    { value: "hi", label: "Hindi" },
    // { value: "kn", label: "Kannada" },
    // { value: "mr", label: "Marathi" },
    // { value: "or", label: "Odia" },
    // { value: "pa", label: "Punjabi" },
    // { value: "ta", label: "Tamil" },
    // { value: "te", label: "Telugu" },
    // { value: "ml", label: "Malayalam" },
    // { value: "bn", label: "Bangla" },
  ];

  useEffect(() => {
    (async () => {
      const translated = await translateDoc(data, selectedLanguage);
      setTranslatedData(translated);
    })();
  }, [data, selectedLanguage]);

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

  const translateDoc = async (data: any, languageCode: string) => {
    const translatedData = { ...data };

    // doctor?.specialization
    if (translatedData?.doctor?.specialization) {
      translatedData.doctor.specialization = await translateField(
        translatedData.doctor.specialization,
        languageCode
      );
    }
    if (translatedData.attachments) {
      for (let attachment of translatedData.attachments) {
        // Translate symptoms
        if (attachment.symptoms) {
          attachment.symptoms = await translateField(
            attachment.symptoms,
            languageCode
          );
        }

        if (attachment.note) {
          attachment.note = await translateField(attachment.note, languageCode);
        }

        // Translate medicine details
        if (attachment.prescriptions_medicines) {
          for (let medicine of attachment.prescriptions_medicines) {
            if (medicine.intake) {
              medicine.intake = await translateField(
                medicine.intake,
                languageCode
              );
            }
          }
        }
      }
    }

    return translatedData;
  };

  const handleLanguageChange = async (languageCode: string) => {
    setSelectedLanguage(languageCode);
    toast.info(
      `Language changed to ${
        languageOptions.find((opt) => opt.value === languageCode)?.label
      }`
    );
  };

  return (
    <Modal
      show={showPreviewModal}
      onHide={() => setShowPreviewModal(false)}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {translatedData ? (
          <>
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
            {/* Render PDF Viewer */}
            <PDFViewer style={{ width: "100%", height: "500px" }}>
              <InvoicePdfDocument data={translatedData} />
            </PDFViewer>
          </>
        ) : (
          <p>Loading Prescription...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowPreviewModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvoicePreview;
