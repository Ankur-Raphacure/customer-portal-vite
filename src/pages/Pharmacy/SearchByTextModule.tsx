import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { SearchByTextModuleStyled } from "./SearchByTextModule.styled";

const SearchByTextModule = (props: any) => {
  const { details, value, setSearchText } = props;
  const recognitionRef = useRef<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [placeholderText, setPlaceholderText] = useState(
    `Search For ‘${details[0]}’` || "Search"
  );
  const [originPage, setOriginPage] = useState("");

  useEffect(() => {
    setOriginPage(props?.origin || "");
  }, [props]);

  const handleVoiceInput = () => {
    setSearchTerm("");

    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

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
      setSearchTerm(speechToText);

      if (setSearchText) {
        setSearchText(speechToText);
      }
    };
    recognition.onerror = (event: any) => {
      alert("Mic is already enabled. You can start talking.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;
    };
  };

  const handleInputChange = (event: any) => {
    props.handleonFilterName(event.target.value);
    setSearchTerm(event.target.value);
    if (setSearchText) {
      setSearchText(event.target.value);
    }
  };

  return (
    <SearchByTextModuleStyled>
      <div className="pharmacy-search-fields">
        <div className="search-bar">
          <IoSearchOutline className="searchicon search-icon" />
          <input
            type="text"
            placeholder={
              originPage === "labtest" ? "Search For Labtest" : placeholderText
            }
            className="search-input"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <FaMicrophone
            className="searchicon mic-icon"
            onClick={handleVoiceInput}
          />
        </div>
      </div>
    </SearchByTextModuleStyled>
  );
};

export default SearchByTextModule;
