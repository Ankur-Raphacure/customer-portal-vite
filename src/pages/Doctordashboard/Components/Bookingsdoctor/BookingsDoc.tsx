import React from "react";
import Table from "react-bootstrap/Table";
import { ReactComponent as Report } from "../../../../assets/icons/report.svg";
import { ReactComponent as Action } from "../../../../assets/icons/action1.svg";
import { ReactComponent as Share } from "../../../../assets/icons/share.svg";
import { ReactComponent as Download } from "../../../../assets/icons/download.svg";
import { ReactComponent as Call } from "../../../../assets/icons/call.svg";
import { ReactComponent as Man } from "../../../../assets/icons/man.svg";

const order = [
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
  {
    serialno: "#3456",
    name: "Abhay Gupta",
    age: 30,
    datetime: "21 Jan 10:30PM	",
    appointfor: "Fever & cough",
  },
];

const Appointorder = () => {
  return (
    <div className="appoint-order">
      <div className="search-bar">
        <input type="text" placeholder="For Patient or Serial Number" />
      </div>
      <div className="ordertable">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Date & Time</th>
              <th>Appointed For</th>
              <th className="action-report">Report</th>
              <th className="action-report">Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <tr>
                <td>{item.serialno} </td>
                <td>{item.name} </td>
                <td>{item.age} </td>
                <td>{item.datetime} </td>
                <td>{item.appointfor} </td>
                <td className="action-report">
                  <Report />
                </td>
                <td className="actions">
                  <Action />
                  <span className="icon-space"></span> <Share />
                  <span className="icon-space"></span> <Download />
                  <span className="icon-space"></span> <Call />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Appointorder;
