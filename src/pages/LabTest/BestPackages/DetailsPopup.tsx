import React, { useState } from "react";
import {
  DetailsPopupStyled,
  Overlay,
  CloseButton,
} from "./DetailsPopup.styled";
import { IoClose } from "react-icons/io5";
import { IoIosInformationCircleOutline, IoIosShareAlt } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const ShareOptionsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const ShareOption = styled.a`
  display: flex;
  align-items: center;
  padding: 5px;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #007bff;
  }
`;

const ShareOptions = ({ url }: { url: string }) => {
  const shareUrl = encodeURIComponent(url);

  return (
    <ShareOptionsStyled>
      <ShareOption
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </ShareOption>
      <ShareOption
        href={`https://api.whatsapp.com/send?text=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </ShareOption>
      <ShareOption
        href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </ShareOption>
    </ShareOptionsStyled>
  );
};

const DetailsPopup = ({ item, onClose, fromPackage }: any) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const history = useHistory();

  const chunkArray = (array: any, chunkSize: any) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const testChunks = chunkArray(item?.tests || [], 9);
  const gridTemplateColumns = testChunks.length
    ? `repeat(${testChunks.length}, 1fr)`
    : "1fr";

  return (
    <>
      <Overlay onClick={onClose} />
      <DetailsPopupStyled>
        <CloseButton onClick={onClose}>
          <IoClose size={30} />
        </CloseButton>
        <div className="wrapper">
          <div className="mainDiv">
            <div className="info">
              <div className="logoDiv">
                <img src={item.image} alt="" />
              </div>
              <div className="package-container">
                <h2 className="package-title">{item.service_name}</h2>
                <p className="package-description">{item.description || ""}</p>
                <div className="package-price">
                  <span>Price </span>
                  <span className="price-amount">
                    {/* ₹{item.price.actual_cost}.00 */}₹
                    {item.price.discounted_price}.00
                  </span>
                  <IoIosInformationCircleOutline />
                </div>
                <div className="sample-required">
                  <span>Sample Required </span>
                  <span className="sample-type">{item.type}</span>
                  <span className="text-sample">Lab Visit & Test</span>
                </div>
                <div className="preparation">
                  <h3>Preparation</h3>
                  <ul>
                    <li>10-12 Hours Fasting Required</li>
                    <li>Water can be consumed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="details">
              {/* {item?.tests ? (
                <>
                  <h1>{item?.tests.length} Tests Include</h1>
                  <div className="listWrapper" style={{ gridTemplateColumns }}>
                    {testChunks.map((chunk, index) => (
                      <ul key={index}>
                        {chunk.map((test: any) => (
                          <li key={test.service_code}>{test.service_name}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </>
              ) : (
                <>
                <h1>Tests Not Available</h1>
                </>
              )} */}
              <div className="btnWrapper">
                <div className="shareWrapper">
                  {showShareOptions && (
                    <ShareOptions url={window.location.href} />
                  )}
                  <div
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="cursor-pointer btn-book-now viewDetailsBtn hover:bg-blue-700 text-center justify-center items-center"
                  >
                    <IoIosShareAlt size={20} /> Share
                  </div>
                </div>
                <div
                  onClick={() => {
                    history.push(
                      fromPackage
                        ? `/labPackageDetils/${item?.service_code}`
                        : `/labTestDetils/${item?.service_code}`
                    );
                  }}
                  className="cursor-pointer btn-book-now cartbtn bg-[#9747FF] hover:bg-blue-700 text-white text-center justify-center items-center"
                >
                  <span className="text-center items-center justify-center justify-content-center">
                    Add to Cart
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailsPopupStyled>
    </>
  );
};

export default DetailsPopup;
