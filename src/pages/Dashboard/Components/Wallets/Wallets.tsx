import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubscriptions } from "./../../../../redux/slices/dashboard/dashboardService";
import { Table, Button, Modal } from "antd";
import "antd/dist/antd.css";
import TableManager from "../../../../components/TableManager/TableManager";

interface Wallet {
  name: string;
  total_amount: number;
  amount: number;
  [key: string]: any; // Allow additional properties for dynamic columns
}

interface ReduxState {
  dashboard: {
    myAllSubscriptions: {
      wallets: Wallet[];
    };
  };
}

interface WalletsProps {
  handleBookNow: (itemId: string) => void;
}

const Wallets: React.FC<WalletsProps> = ({ handleBookNow }: any) => {
  const dispatch = useDispatch();

  const { myAllSubscriptions } = useSelector(
    (state: ReduxState) => state.dashboard
  );

  console.log("myAllSubscriptions : ", myAllSubscriptions);

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Define initial column configuration
  const initialColumns = useMemo(
    () => [
      { title: "Wallets Name", dataIndex: "name", key: "name" },
      {
        title: "Allotted Amount",
        dataIndex: "total_amount",
        key: "total_amount",
      },
      { title: "Utilized Amount", key: "utilized" },
      { title: "Balance Amount", dataIndex: "amount", key: "amount" },
      { title: "Action", key: "action" },
    ],
    []
  );

  const [columns, setColumns] = useState(initialColumns);
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    console.log("currwallets : ", wallets);
  }, [wallets]);

  // Update columns with render functions
  const columnsWithRender = useMemo(
    () =>
      columns.map((col) => {
        if (col.key === "utilized") {
          return {
            ...col,
            render: (_: any, record: Wallet) => (
              <a>₹{record.total_amount - record.amount}</a>
            ),
          };
        }
        if (col.key === "action") {
          return {
            ...col,
            render: (_: any, record: Wallet) => (
              <button
                onClick={() => handleBookNow(record)}
                className="book-now-sec-btn"
              >
                Book Now
              </button>
            ),
          };
        }
        return {
          ...col,
          render: (text: any) => (
            <a>
              {col.dataIndex === "total_amount" || col.dataIndex === "amount"
                ? `₹${text || 0}`
                : text}
            </a>
          ),
        };
      }),
    [columns, handleBookNow]
  );

  useEffect(() => {
    dispatch(getAllSubscriptions());
  }, [dispatch]);

  useEffect(() => {
    // const fetchedWallets =
    //   myAllSubscriptions?.wallets?.filter(
    //     (item: any) => item?.total_amount > 0
    //   ) || [];
    const fetchedWallets = myAllSubscriptions?.wallets || [];
    console.log("currfetchedWallets : ", fetchedWallets);

    setWallets(fetchedWallets);
  }, [myAllSubscriptions]);

  // Handle opening and closing of the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleColumnsChange = useCallback(
    (newColumns: typeof initialColumns) => {
      if (newColumns.length === 0) {
        Modal.warning({
          title: "Warning",
          content: "You must have at least one column visible.",
        });
        return;
      }
      setColumns(newColumns); // Update the column state in Wallets
    },
    []
  );

  const handleAddColumn = (newColumn: any, items: string[]) => {
    // Add the new column to the state
    setColumns((prevColumns) => [...prevColumns, newColumn]);

    // Update each wallet with the new column's items
    const updatedWallets = wallets.map((wallet, index) => ({
      ...wallet,
      [newColumn.key]: items[index % items.length], // Cycle through items if fewer than wallets
    }));
    setWallets(updatedWallets);
  };

  return (
    <div className="wallets-sec-containter-table">
      <br />
      <div>
        <h2>My Wallets</h2>
        {/* <Button type="primary" onClick={showModal}>
          Manage Columns
        </Button> */}
      </div>
      <br />
      <div>
        <Table
          className="table-resp"
          columns={columnsWithRender}
          pagination={false}
          dataSource={wallets}
          rowKey={(record) => record.name} // Unique row key
        />
      </div>

      <TableManager
        initialColumns={columns} // Pass current columns
        data={wallets} // Pass the data to TableManager
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onColumnsChange={handleColumnsChange} // Update Wallets columns
        onAddColumn={handleAddColumn} // Handle adding new columns
      />
    </div>
  );
};

export default Wallets;
