import React, { useEffect, useRef, useState } from "react";
import { Input, Select } from "antd";
import { FaMicrophone, FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { googleSearchAPI } from "../../redux/slices/dashboard/dashboardService";
import { MultiGoogleSelectStyled } from "./MultiGoogleSelect.styled";

const MultiGoogleSelect = ({
  handleSelectSymptom,
  issues,
  setIssues,
  caption,
}: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allIssues, setAllIssues] = useState("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const dispatch = useDispatch();
  const recognitionRef = useRef<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const allData = issues
      .map((item: any, index: any) => `${index + 1}. ${item}`)
      .join("\n");
    setAllIssues(allData);
  }, [issues]);

  const handleSearch = async (value: string) => {
    setSearchTerm(value);

    if (value.trim()) {
      try {
        const response = (await dispatch(googleSearchAPI(value))) as any;

        // Process the payload array into Select-compatible options
        const suggestions = response?.payload || [];
        const formattedOptions = suggestions.map((item: string) => ({
          value: item,
          label: item,
        }));

        // Always include the current search term as an option
        const searchTermOption = { value, label: value };
        const uniqueOptions = [
          //@ts-ignore
          ...new Set([
            ...formattedOptions.map((opt: any) => opt.value),
            searchTermOption.value,
          ]),
        ].map((val) => ({
          value: val,
          label: val,
        }));

        setOptions(uniqueOptions);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
        setOptions([{ value, label: value }]);
      }
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (value: string) => {
    if (issues.includes(value)) {
      toast.error(`Duplicate Symptom detected: ${value}`);
      setSearchTerm(""); // Reset the search field
      return;
    }

    handleSelectSymptom(value); // Add the symptom
    setSearchTerm(""); // Reset the search field
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }
    toast.success("Mic is enabled you can start Talking");

    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.start();

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      console.log("speech : ", speechToText);

      if (speechToText) {
        setSearchTerm(speechToText);
        handleSearch(speechToText);
        setDropdownOpen(true);
      }
    };
    recognition.onerror = (event: any) => {
      toast.error("Mic is already enabled. You can start talking.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;
    };
  };

  const handleDeleteIssue = (index: any) => {
    setIssues(issues.filter((_: any, i: any) => i !== index));
  };

  return (
    <MultiGoogleSelectStyled>
      <div className="multiGglSelectWrapper">
        <div className="searchIssues">
          <p>Enter {caption}</p>
          <div className="search-bar relative">
            {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-400" /> */}
            <Select
              showSearch
              value={searchTerm}
              placeholder="Search Issue"
              onSearch={handleSearch}
              onSelect={handleSelect} // Use onSelect instead of onChange
              options={options}
              style={{ width: "100%" }}
              className="pl-8 symptomSearch" // Add left padding to account for the icon
              filterOption={false} // Disable internal filtering; use API results instead
              dropdownRender={(menu) => <div className="p-1">{menu}</div>}
              open={dropdownOpen} // Control dropdown visibility
              onDropdownVisibleChange={(visible) => setDropdownOpen(visible)}
              getPopupContainer={(trigger) => trigger.parentNode}
            />
            <FaMicrophone
              className="cursor-pointer"
              onClick={handleVoiceInput}
            />
          </div>
          <div className="issues-list">
            {issues.length > 0 &&
              issues?.map((item: any, index: any) => (
                <div className="issue-tag" key={index}>
                  {item}
                  <FaTimes
                    className="icon delete-icon"
                    onClick={() => handleDeleteIssue(index)}
                  />
                </div>
              ))}
          </div>
        </div>
        {issues.length > 0 && (
          <div className="viewIssues">
            <p>{caption}</p>
            <Input.TextArea
              value={allIssues}
              readOnly
              rows={3}
              style={{ width: "100%", overflow: "scroll" }} // Added overflow: scroll
            />
          </div>
        )}
      </div>
    </MultiGoogleSelectStyled>
  );
};

export default MultiGoogleSelect;
