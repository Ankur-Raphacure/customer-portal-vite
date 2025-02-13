import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubscriptions } from "./../../../../redux/slices/dashboard/dashboardService";
import { Space, Table, Tag } from "antd";
import "antd/dist/antd.css";

const Subscriptions = (props: any) => {
  const { handleBookNow } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const { myAllSubscriptions } = useSelector(
    (ReduxState: any) => ReduxState.dashboard,
  );
  console.log("myAllSubscriptions", myAllSubscriptions);

  useEffect(() => {
    dispatch(getAllSubscriptions());
  }, []);

  const columns = [
    {
      title: "Subscription Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Offer",
      dataIndex: "discount_percentage",
      key: "offer",
      render: (text: any) => {
        return <a>{text ? `${text}%` : "0%"}</a>;
      },
    },
    // Commenting out the Coverage column as requested
    // {
    //   title: "Coverage",
    //   key: "name",
    //   render: (dtext: any) => (
    //     <a>
    //       {dtext?.total_limits === 9999 ? dtext?.wallet_type : dtext?.limits}
    //     </a>
    //   ),
    // },
    {
      title: "Limit",
      dataIndex: "wallet_type",
      key: "limit",
      render: (text: any, record: any) => {
        return (
          <a>
            {text === "unlimited"
              ? "Unlimited"
              : record.total_limits || record.total_amount}
          </a>
        );
      },
    },
    {
      title: " ",
      key: "amount",
      render: (itemId: any) => {
        return (
          <>
            <div>
              <button
                onClick={() => {
                  handleBookNow(itemId);
                }}
                className="book-now-sec-btn yo"
              >
                Book Now
              </button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <br />
      <div>
        <h2>My Subscriptions</h2>
      </div>
      <br />
      <div>
        <Table
          className="table-resp"
          columns={columns}
          pagination={false}
          dataSource={myAllSubscriptions?.wallets || []}
        />
      </div>
    </div>
  );
};

export default Subscriptions;
