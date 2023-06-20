import React, { useState, useEffect } from "react";
import { Button, Checkbox, Space, Table } from "antd";
import { ColumnType, SorterResult } from "antd/lib/table/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store";
import { saveFormData } from "./action";
import { useTranslation } from "react-i18next";
interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  phone: string;
  nationality: string;
  management: string;
}



const DataCard: React.FC = () => {
  const StoreData = useSelector((state: RootState) => state.data.data);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    if (StoreData !== null) {

      const newData = StoreData.map((item: any, index: number) => {
        let gender = "";
        if (item.prefix === "ด.ช." || item.prefix === "นาย") {
          gender = "ชาย";
        } else {
          gender = "หญิง";
        }

        return {
          key: index,
          name: item.firstName + " " + item.lastName,
          gender: gender,
          phone: item.phone2 + "" + item.phone,
          nationality: item.nationality,
          management: "ไม่มี",
        };
      });
      setData(newData);
    } else {
      console.log("No data found in localStorage.");
    }
  }, [StoreData]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [Data, setData] = useState<DataType[]>([]);
  const columns: ColumnType<DataType>[] = [
    {
      title: (
        <Checkbox
          checked={selectAll}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        >
          <span style={{ marginRight: "8px" }}>{t("name")}</span>
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
      title: t("gender"),
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: t("phonenumber"),
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: t("nationality"),
      dataIndex: "nationality",
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: t("management"),
      dataIndex: "management",
      render: (text, record) => (
        <Button htmlType="button" onClick={() => newhandleDelete(record.key)}>
          {t("deleteinformation")}
        </Button>
      ),
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
    console.log(key);
    if (checked) {
      setSelectedRowKeys([...selectedRowKeys, key]);
    } else {
      setSelectedRowKeys(selectedRowKeys.filter((k) => k !== key));
    }
  };
  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRowKeys(Data.map((item) => item.key));
    } else {
      setSelectedRowKeys([]);
    }
  };
  const handleDelete = () => {
    // นำข้อมูลที่ถูกเลือกใน selectedRowKeys มาใช้ในการลบข้อมูล

    const data1 = localStorage.getItem("formData");
    const data = JSON.parse(data1 || "[]"); // แปลงสตริงเป็นอาร์เรย์

    const newData = Data.filter((item: any) =>
      selectedRowKeys.includes(item.key)
    );
    setSelectedRowKeys([])
    console.log(newData);
    const indexes: number[] = newData.map((item: any) => item.key);
    indexes.reverse();
    indexes.forEach((index) => {
      data.splice(index, 1);
    });
    console.log(data);
    dispatch(saveFormData(data));
    // setData(newData); // ตั้งค่าข้อมูลใหม่
    // setSelectedRowKeys([]); // ล้างการเลือกข้อมูลที่ถูกลบ
  };
  const newhandleDelete = (key: React.Key) => {
    const data1 = localStorage.getItem("formData");
    const data = JSON.parse(data1 || "[]"); // แปลงสตริงเป็นอาร์เรย์
    data.splice(key as number, 1);
    console.log(data);
    dispatch(saveFormData(data));
    // const newData = data.filter(
    //   (item: any) => !selectedRowKeys.includes(item.key)
    // );

    // setData(newData);
    // setSelectedRowKeys(
    //   selectedRowKeys.filter((selectedKey) => selectedKey !== key)
    // );
  };

  return (
    <>
      <div className="my-3">
        <Checkbox
          checked={selectAll}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        >
          <span style={{ marginRight: "8px" }}>{t("selectall")}</span>
        </Checkbox>
        <Button htmlType="button" onClick={handleDelete}>
        {t("deleteinformation")}
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
