import React, { useState, useEffect } from "react";
import { Modal, Dropdown, Menu, Input, Form, Button } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TableManagerStyled } from "./TableManager.styled";
import { DownOutlined } from "@ant-design/icons";
import { RxCross2 } from "react-icons/rx";

interface Column {
  title: string;
  dataIndex?: string;
  key: string;
  render?: (text: any, record: any, index: number) => React.ReactNode;
}

interface Wallet {
  name: string;
  total_amount: number;
  amount: number;
  [key: string]: any; // Allow dynamic properties
}

interface TableManagerProps {
  initialColumns: Column[];
  data: Wallet[];
  visible: boolean;
  onClose: () => void;
  onColumnsChange: (newColumns: Column[]) => void;
  onAddColumn: (newColumn: Column, items: string[]) => void;
}

const TableManager: React.FC<TableManagerProps> = ({
  initialColumns,
  data,
  visible,
  onClose,
  onColumnsChange,
  onAddColumn,
}) => {
  const [columnOrder, setColumnOrder] = useState<Column[]>(initialColumns);
  const [isAddColumnVisible, setIsAddColumnVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setColumnOrder(initialColumns); // Sync with parent columns
  }, [initialColumns]);

  const handleColumnRemoval = (key: string) => {
    if (columnOrder.length <= 1) {
      Modal.warning({
        title: "Warning",
        content: "You must have at least one column visible.",
      });
      return;
    }

    const updatedColumns = columnOrder.filter((column) => column.key !== key);
    setColumnOrder(updatedColumns);
    onColumnsChange(updatedColumns);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newColumnOrder = Array.from(columnOrder);
    const [movedColumn] = newColumnOrder.splice(result.source.index, 1);
    newColumnOrder.splice(result.destination.index, 0, movedColumn);

    setColumnOrder(newColumnOrder);
    onColumnsChange(newColumnOrder);
  };

  // Function to generate dropdown items for a column
  const getColumnDropdownItems = (key: string): React.ReactNode => {
    const items = data.map((item) => {
      switch (key) {
        case "name":
          return item.name;
        case "total_amount":
          return `₹${item.total_amount}`;
        case "amount":
          return `₹${item.amount}`;
        case "utilized":
          return `₹${item.total_amount - item.amount}`;
        default:
          return item[key]; // For dynamically added columns
      }
    });

    const uniqueItems = Array.from(new Set(items)).filter(
      (item) => item !== undefined && item !== "",
    );

    if (uniqueItems.length === 0) {
      return columnOrder.find((col) => col.key === key)?.title;
    }

    return (
      <Dropdown
        overlay={
          <Menu>
            {uniqueItems.map((item, index) => (
              <Menu.Item key={index}>{item}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <a href="#" onClick={(e) => e.preventDefault()}>
          {columnOrder.find((col) => col.key === key)?.title} <DownOutlined />
        </a>
      </Dropdown>
    );
  };

  const showAddColumnModal = () => {
    setIsAddColumnVisible(true);
  };

  const handleAddColumnSubmit = (values: {
    columnName: string;
    items: string[];
  }) => {
    const newColumn: Column = {
      title: values.columnName,
      dataIndex: values.columnName.toLowerCase().replace(/\s+/g, "_"),
      key: values.columnName.toLowerCase().replace(/\s+/g, "_"),
    };

    onAddColumn(newColumn, values.items);
    setIsAddColumnVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Modal
        title="Manage Columns"
        visible={visible}
        onOk={onClose}
        onCancel={onClose}
        footer={[
          <Button key="add" type="dashed" onClick={showAddColumnModal}>
            Add Column
          </Button>,
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={onClose}>
            OK
          </Button>,
        ]}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="columns">
            {(provided) => (
              <TableManagerStyled
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {columnOrder.map((column, index) => (
                  <Draggable
                    key={column.key}
                    draggableId={column.key}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <div className="dropdownWrapper">
                          {getColumnDropdownItems(column.key)}
                        </div>
                        <button
                          onClick={() => handleColumnRemoval(column.key)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "red",
                            cursor: "pointer",
                          }}
                        >
                          <RxCross2 size={20} />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TableManagerStyled>
            )}
          </Droppable>
        </DragDropContext>
      </Modal>

      {/* Modal for adding a new column */}
      <Modal
        title="Add New Column"
        visible={isAddColumnVisible}
        onCancel={() => setIsAddColumnVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleAddColumnSubmit} form={form}>
          <Form.Item
            label="Column Name"
            name="columnName"
            rules={[
              { required: true, message: "Please input the column name!" },
            ]}
          >
            <Input placeholder="Enter column name" />
          </Form.Item>
          {data.map((_, index) => (
            <Form.Item
              key={index}
              label={`Item ${index + 1}`}
              name={["items", index]}
              rules={[{ required: true, message: "Please input the item!" }]}
            >
              <Input placeholder={`Enter item for row ${index + 1}`} />
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Column
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableManager;
