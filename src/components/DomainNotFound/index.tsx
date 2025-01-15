import React, { useEffect } from "react";
import notFound from "../../images/not-found.gif";
import "./styles/custom.css";

const DomainNotFound = (props: any) => {
  useEffect(() => {
    try {
      let footer: any = document.getElementById("index-footer")!;
      footer.style.display = "none";
    } catch (e) {
      console.log(e);
    }
  }, []);
  const emailT = props?.isRPlus
    ? "contact@raphaplus.in"
    : "contact@raphacure.com";
  const gotoNewPage = () => {
    window.location.href = props?.isRPlus
      ? "https://www.raphaplus.in/"
      : "https://raphacure.com/";
  };
  return (
    <>
      <div className="not-found"></div>
      <div className="not-found-section">
        <p className="not-found-content">
          Your domain server is not yet activated, Please contact support team
          at {emailT}
        </p>
        <p className="not-found-content">
          <button onClick={gotoNewPage}>GO TO HOME PAGE</button>
        </p>
      </div>
    </>
  );
};

export default DomainNotFound;
