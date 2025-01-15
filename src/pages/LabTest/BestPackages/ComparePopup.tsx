import React from "react";
import { RxCross2 } from "react-icons/rx";

const ComparePopup = ({ selectedItems, onCompare, onClose }: any) => {
  console.log("selectedItems : ", selectedItems);
  return (
    <div className="compare-popup">
      <button onClick={onClose} className="close-button2">
        <RxCross2 size={30} />
      </button>
      <div className="compare-list">
        {selectedItems.map((item: any, index: any) => (
          <div key={index} className="compare-item mb-3">
            <div className="service-name">{item.service_name}</div>
            <div className="price">
              <span className="text-decoration-line-through text-muted">
                ₹ {item?.price?.actual_cost}
              </span>
              <span className="ms-2 fw-bold">
                ₹ {item.price.discounted_price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onCompare}
        className={`${
          selectedItems.length < 3 ? "disabled-button" : "compare-button"
        }`}
        disabled={selectedItems.length < 3}
      >
        {selectedItems.length < 3
          ? `Add ${3 - selectedItems.length} More items to Compare`
          : "Compare"}
      </button>
      {/* {selectedItems.length >= 3 && (
      )} */}
    </div>
  );
};

export default ComparePopup;
