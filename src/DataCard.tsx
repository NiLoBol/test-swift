import React, { useState, useEffect } from "react";
import { Button, Checkbox, Space, Table } from "antd";
import { ColumnType, SorterResult } from "antd/lib/table/interface";
import { useSelector } from "react-redux";
import store from "./store";
interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  phone: string;
  nationality: string;
  management: string;
}
const test = store.getState().form;

const datase = localStorage.getItem("formData");

const DataCard: React.FC = () => {
  const [data1, setData1] = useState<DataType[]>([]);
  const datase = localStorage.getItem("formData");
  useEffect(() => {

    const interval = setInterval(() => {
      if (datase !== null) {
        const parsedData = JSON.parse(datase);
  
        const newData = parsedData.map((item: any, index: number) => {
          let gender = "";
          if (item.prefix === "ด.ช."||item.prefix === "นาย") {
            gender = "ชาย";
          } else {
            gender = "หญิง";
          }
        
          return {
            key: (index + 1).toString(),
            name: item.firstName + " " + item.lastName,
            gender: gender,
            phone: item.phone2,
            nationality: item.nationality,
            management: "ไม่มี",
          };
        });
        setData(newData);
      } else {
        console.log("No data found in localStorage.");
      }
    }, 500);

    return () => {
      console.log("No data found in localStorage.");
      clearInterval(interval);
    };
  }, []);
 

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [Data, setData] = useState(data1);
  const columns: ColumnType<DataType>[] = [
    {
      title: (
        <Checkbox
          checked={selectAll}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        >
          <span style={{ marginRight: "8px" }}>ชื่อ</span>
        </Checkbox>
      ),
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => handleCheckboxChange(record.key, e.target.checked)}
        >
          {text}
        </Checkbox>
      ),
    },
    {
      title: "เพศ",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "หมายเลขโทรศัพท์",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: "การจัดการ",
      dataIndex: "management",
      render: () => <Button htmlType="button">ลบข้อมูล</Button>,
    },
  ];

  const handleTableChange = (
    pagination: any,
    filters: Record<string, any>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[],
    extra: any
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const handleCheckboxChange = (key: React.Key, checked: boolean) => {
    if (checked) {
      setSelectedRowKeys([...selectedRowKeys, key]);
    } else {
      setSelectedRowKeys(selectedRowKeys.filter((k) => k !== key));
    }
  };
  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRowKeys(data1.map((item) => item.key));
    } else {
      setSelectedRowKeys([]);
    }
  };
  const handleDelete = () => {
    // นำข้อมูลที่ถูกเลือกใน selectedRowKeys มาใช้ในการลบข้อมูล
    const newData = data1.filter((item) => !selectedRowKeys.includes(item.key));
    setData(newData); // ตั้งค่าข้อมูลใหม่
    setSelectedRowKeys([]); // ล้างการเลือกข้อมูลที่ถูกลบ
  };
  return (
    <>
      <div className="my-3">
        <Checkbox
          checked={selectAll}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        >
          <span style={{ marginRight: "8px" }}>เลือกทั้งหมด</span>
        </Checkbox>
        <Button htmlType="button" onClick={handleDelete}>
          ลบข้อมูล
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={Data}
        onChange={handleTableChange}
        pagination={false}
      />
    </>
  );
};

export default DataCard;
