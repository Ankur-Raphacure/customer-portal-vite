import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Ensure the Google Translate script runs when the component is mounted
    const addGoogleTranslateScript = () => {
      if (!document.querySelector(".google-translate-script")) {
        const script = document.createElement("script");
        script.classList.add("google-translate-script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    };
    addGoogleTranslateScript();

    // Inject CSS to hide the "Powered by Google" branding
    const style = document.createElement("style");
    style.textContent = `
      .goog-logo-link { display: none !important; }
      .goog-te-gadget { font-size: 0 !important;  }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <div className="shadow-none">
        <div id="google_translate_element"></div>
      </div>
    </>
  );
};

export default GoogleTranslate;
