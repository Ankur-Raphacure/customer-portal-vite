import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { SearchByTextModuleStyled } from "./SearchByTextModule.styled";
import { LuMic } from "react-icons/lu";

const SearchByTextModule = (props: any) => {
  const { details, value, setSearchText } = props;
  console.log("details : ", details);
  const recognitionRef = useRef<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [placeholderText, setPlaceholderText] = useState(
    `Search ‘${details[0]}’` || "Search",
  );

  const [originPage, setOriginPage] = useState("");

  useEffect(() => {
    setOriginPage(props?.origin || "");
    setPlaceholderText(`Search ‘${details[0]}’` || "Search");
  }, [props, details]);

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
              originPage === "labtest" ? "Search Labtest" : placeholderText
            }
            className="search-input"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <LuMic className="searchicon mic-icon" onClick={handleVoiceInput} />
        </div>
      </div>
    </SearchByTextModuleStyled>
  );
};

export default SearchByTextModule;
