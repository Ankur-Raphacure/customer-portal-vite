import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { TestingStyled } from "./Testing.styled";

import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// import axios from "axios";
// import Axios from "axios";
// import Swal from "sweetalert2";
// import { jsPDF } from "jspdf";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import clsx from "clsx";
import CloseButton from "react-bootstrap/CloseButton";
const Testing = (props: any) => {
  // console.log("propsprops", props);

  const history = useHistory();
  const [isError, setIsError] = useState("");
  const dispatch = useDispatch();
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const [miles, setMiles] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  // const generatePDF = () => {
  //   // Create a new instance of jsPDF
  //   const doc = new jsPDF();
  //   const htmlContent = `
  //  <!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Consultation Report</title>\n  <style>\n      body {\n          font-family: Arial, sans-serif;\n          margin: 0;\n          padding: 0;\n          background-color: #f4f4f4;\n      }\n\n      h3 {\n          margin-top: 1rem;\n      }\n\n      .table-div {\n          box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.10);\n          border-radius: 2px;\n          width: 100%;\n          height: 100%;\n          background-color: #fff;\n          padding: 1rem;\n      }\n\n      .container {\n          width: 800px;\n          margin: 20px auto;\n          background-color: #fff;\n          border: 1px solid #ddd;\n          padding: 20px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n      }\n\n      @media screen and (max-width: 700px) {\n          .container {\n              width: 100%;\n          }\n      }\n\n      .header,\n      .footer {\n          text-align: center;\n          padding: 10px 0;\n      }\n\n      .header img {\n          width: 50px;\n          height: 50px;\n      }\n\n      .content {\n          margin: 20px 0;\n      }\n\n      .table {\n          width: 100%;\n          border-collapse: collapse;\n          margin-bottom: 20px;\n      }\n\n      .table th,\n      .table td {\n          border: 1px solid #9747FF;\n          padding: 8px;\n          text-align: center;\n      }\n\n      .table th {\n          background-color: #f2f2f2;\n      }\n\n      .notes {\n          background-color: white;\n          box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.1) inset;\n          padding: 7px;\n          border: 1px solid #ddd;\n          margin: inherit;\n      }\n\n      .signature {\n          text-align: right;\n          margin-top: 20px;\n      }\n\n      .pt-details {\n          display: flex;\n          justify-content: space-between;\n      }\n\n      .footer {\n          display: flex;\n          justify-content: space-between;\n      }\n  </style>\n</head>\n\n<body>\n\n  <div class=\"container\">\n      <div class=\"header\">\n          <img src=# alt=\"RaphaCure\" style=\"height: 8vh; width: auto; float: right;\">\n          <div style=\"display: flex; flex-direction: column; align-items: flex-start; margin-left: 1rem; margin-top: 1rem;\">\n              <h2 id=\"dr\">Dr. Doc 50</h2>\n              <p style=\"margin-top: -1rem; margin-left: 1rem;\">Physiotherapist</p>\n              <p style=\"margin-top: -3rem; margin-left: 1rem;\">opd_consultation</p>\n          </div>\n      </div>\n\n      <div class=\"content\">\n          <div class=\"pt-details\">\n              <div>\n                  <p><strong>Booked for:</strong> Awert redd</p>\n                  <p><strong>Age:</strong> 25</p>\n                  <p><strong>Gender:</strong> male</p>\n                  <p><strong>Email:</strong> frty12@fmail.com</p>\n              </div>\n              <div>\n                  <p><strong>Consultation Date:</strong> 07/11/2024</p>\n                  <p><strong>Time Slot:</strong> 6:30 pm</p>\n                  <p><strong>Phone:</strong> 9164236553</p>\n              </div>\n          </div>\n\n          <div class=\"table-div\">\n              <h3>Medicine Prescribed</h3>\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                          <th>SlNo</th>\n                          <th>Brand</th>\n                          <th>Dosage</th>\n                          <th>Frequency</th>\n                          <th>No of Days</th>\n                          <th>Intake</th>\n                          <th>Price</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      \n                          <tr>\n                              <td>1</td>\n                              <td>Consultation</td>\n                              <td>MG 100</td>\n                              <td>1-2-5</td>\n                              <td>1</td>\n                              <td>after food</td>\n                              <td>1500</td>\n                          </tr>\n                      \n                          <tr>\n                              <td>2</td>\n                              <td>5 MONO SR 30MG TABLET (STRIP)</td>\n                              <td>MG 100</td>\n                              <td>1-2-5</td>\n                              <td>1</td>\n                              <td>after food</td>\n                              <td>45</td>\n                          </tr>\n                      \n                          <tr>\n                              <td>3</td>\n                              <td>Consultation</td>\n                              <td>MG 100</td>\n                              <td>1-2-5</td>\n                              <td>1</td>\n                              <td>after food</td>\n                              <td>1500</td>\n                          </tr>\n                      \n                  </tbody>\n              </table>\n          </div>\n\n          <div class=\"table-div\">\n              <h3>Tests Recommended</h3>\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                          <th>SlNo</th>\n                          <th>Test Name</th>\n                          <th>Diagnosis</th>\n                          <th>Symptoms</th>\n                          <th>Next Visit</th>\n                          <th>Price</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      \n                          <tr>\n                              <td>1</td>\n                              <td>Alb/Glb ratio</td>\n                              <td>sdf</td>\n                              <td>sdfsdf</td>\n                               <td>11/17/2024</td>\n                              <td>170</td>\n                          </tr>\n                      \n                          <tr>\n                              <td>2</td>\n                              <td>Albumin</td>\n                              <td>Diag</td>\n                              <td>Reddish Skin</td>\n                               <td>11/16/2024</td>\n                              <td>135</td>\n                          </tr>\n                      \n                          <tr>\n                              <td>3</td>\n                              <td>ANKLE JOINT LEFT AP</td>\n                              <td>fdfd</td>\n                              <td>dffds</td>\n                               <td>11/17/2024</td>\n                              <td>275</td>\n                          </tr>\n                      \n                  </tbody>\n              </table>\n          </div>\n\n          <div class=\"notes\">\n              <h4>Notes</h4>\n              <p>fever, cough, headache</p>\n          </div>\n      </div>\n\n      <div class=\"footer\">\n          <div>\n              <p>123/4, 6th cross, road, opp, Thomas square, HSR Extension, VISAKHAP<br>\n                  High school, Techno hub Bengaluru, Karnataka 560102<br>\n                  +91 9555616032<br>\n                  <a href=\"mailto:wellness@raphacure.com\">wellness@raphacure.com</a></p>\n          </div>\n          <div class=\"signature\">\n              <p>Signature: ________________________</p>\n          </div>\n      </div>\n  </div>\n\n</body>\n\n</html>
  // `;
  //   // Create a temporary DOM element to hold the HTML
  //   const tempDiv = document.createElement("div");
  //   tempDiv.innerHTML = htmlContent;
  //   document.body.appendChild(tempDiv);

  // Render HTML into the PDF
  // doc.html(tempDiv, {
  //   callback: function (doc) {
  //     doc.save("output.pdf");
  //   },
  //   x: 10, // X position in the PDF
  //   y: 10, // Y position in the PDF
  //   width: 190, // Maximum width of the content
  // });

  // // Remove temporary div
  // document.body.removeChild(tempDiv);

  //   //
  // };

  return (
    <>
      <TestingStyled>
        <div>
          <div>Testing Testing Testing</div>

          {/* <button

            onClick={generatePDF}
            style={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Download PDF

          </button> */}
        </div>
      </TestingStyled>
    </>
  );
};
export default Testing;
