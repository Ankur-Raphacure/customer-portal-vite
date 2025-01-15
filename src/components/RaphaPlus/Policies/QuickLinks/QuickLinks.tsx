import { useEffect, useState } from "react";
import { QuickLinksStyled } from "./QuickLinks.styled";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const [currPage, setCurrPage] = useState<string>();
  useEffect(() => {
    const pathname = window.location.pathname;
    const lastPart = pathname
      .split("/")
      .filter((part) => part)
      .pop();
    setCurrPage(lastPart);
  }, []);

  return (
    <QuickLinksStyled>
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li className={currPage === "disclaimer" ? "active" : ""}>
            <Link to={"/raphaplus/disclaimer"}>Disclaimer</Link>
          </li>
          <li className={currPage === "privacy" ? "active" : ""}>
            <Link to={"/raphaplus/privacy"}>Privacy Policies</Link>
          </li>
          {/* <li className={currPage === "shipping" ? "active" : ""}>
            <Link to={"/raphaplus/shipping"}>Shipping Policies</Link>
          </li> */}
          <li className={currPage === "security" ? "active" : ""}>
            <Link to={"/raphaplus/security"}>Security Policies</Link>
          </li>
          <li className={currPage === "terms" ? "active" : ""}>
            <Link to={"/raphaplus/terms"}>Terms & Conditions</Link>
          </li>
          <li className={currPage === "return" ? "active" : ""}>
            <Link to={"/raphaplus/return"}>Refund Policies</Link>
          </li>
          <li className={currPage === "disclosure" ? "active" : ""}>
            <Link to={"/raphaplus/disclosure"}>
              Responsible Disclosure Policy
            </Link>
          </li>
        </ul>
      </div>
    </QuickLinksStyled>
  );
};

export default QuickLinks;
