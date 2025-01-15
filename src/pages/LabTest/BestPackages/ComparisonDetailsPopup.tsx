import React from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css"; // Import Ant Design styles
import { IoClose } from "react-icons/io5";
import { updateShowLoginModel } from "../../../redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ComparisonDetailsPopup = ({ selectedItems, onClose }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  // Define the columns for the table
  const columns = [
    {
      title: "Packages",
      dataIndex: "service_name",
      key: "service_name",
    },
    {
      title: "Total Tests Included",
      dataIndex: "total_tests",
      key: "total_tests",
      render: (text: any, record: any) => `${record.tests.length} Tests`, // Custom rendering
    },
    {
      title: "Price",
      dataIndex: ["price", "actual_cost"],
      key: "price",
    },
    {
      title: "Discount",
      dataIndex: ["price", "discount_percentage"],
      key: "discount",
      render: (discount: number) => `${discount}%`, // Format the discount
    },
    {
      title: "Total",
      dataIndex: ["price", "discounted_price"],
      key: "total",
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <button type="button" className="book-now-button btn btn-primary">
          <span
            onClick={() => {
              handleBookNow(record);
            }}
            className="text-center items-center justify-center justify-content-center"
          >
            Book Now
          </span>
        </button>
      ),
    },
  ];

  const handleBookNow = async (vendor: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labPackageDetils/${vendor?.service_code}`);
      // dispatch(handleAddToCart({ ...itemR, categoryName: "labtest" }));
    }
  };

  return (
    <div className="comparison-details-popup">
      <div>
        <button className="btn btn-outline close-btns-div" onClick={onClose}>
          <IoClose />
        </button>
      </div>
      <div className="comparison-details">
        <Table
          dataSource={selectedItems}
          columns={columns}
          rowKey={(record: any) => record.id || record.service_name}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default ComparisonDetailsPopup;
