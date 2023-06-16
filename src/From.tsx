import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Row,
  Col,
  Space,
} from "antd";
import React, { useState } from "react";
import SelectOption from "./SelectOption";
import { Option } from "antd/es/mentions";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "./action";
import store from "./store";

const FromDetail: React.FC = () => {
  const [phone2, setPhone2] = useState("+66");

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const datase = localStorage.getItem("formData");

  if (datase !== null) {
    const parsedData = JSON.parse(datase);
    console.log(parsedData);
  } else {
    console.log("No data found in localStorage.");
  }
  
  const handleFormSubmit = (values: any) => {
    const TestPush = [];
    const formData = form.getFieldsValue();
    formData.phone2 = phone2;
    
    // เพิ่มข้อมูลใหม่ใน TestPush

    const storedData = localStorage.getItem("formData");
    const existingData = storedData ? JSON.parse(storedData) : null;
    if (existingData === null) {
      formData.key=1;
      TestPush.push(formData);
    } else {
      console.log(existingData);
      if (Array.isArray(existingData)) {
        existingData.map((data: any) => TestPush.push(data));
      } else {
        TestPush.push(existingData);
      }
      
      TestPush.push(formData);
      
    }

    const jsonData = JSON.stringify(TestPush);
    console.log(jsonData);

    localStorage.setItem("formData", jsonData);
    console.log(localStorage.getItem("formData"));
  };

  const valuePhone = [
    "+1",
    "+7",
    "+33",
    "+39",
    "+44",
    "+49",
    "+61",
    "+66",
    "+81",
    "+82",
    "+86",
    "+91",
  ];
  const outputPhone = [
    "+1: สหรัฐอเมริกา",
    "+7: รัสเซีย",
    "+33: ฝรั่งเศส",
    "+39: อิตาลี",
    "+44: สหราชอาณาจักร (อังกฤษ, สก็อตแลนด์, เวลส์)",
    "+49: เยอรมนี",
    "+61: ออสเตรเลีย",
    "+66: ไทย",
    "+81: ญี่ปุ่น",
    "+82: เกาหลีใต้",
    "+86: จีน",
    "+91: อินเดีย",
  ];
  const handleClear = () => {};
  const prefix = ["ด.ช.", "ด.ญ.", "นาย", "นางสาว", "นาง"];
  const outputprefix = ["ด.ช.", "ด.ญ.", "นาย", "นางสาว", "นาง"];
  const idCardFormat = [1, 4, 5, 2, 1];
  return (
    <>
      <Form form={form} onFinish={handleFormSubmit} className="p-2">
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="คำนำหน้าชื่อ"
              name="prefix"
              initialValue="คำนำหน้าชื่อ"
              rules={[{ required: true, message: "กรุณากรอกคำนำหน้าชื่อ" }]}
            >
              <Select>
                {prefix.map((code, index) => (
                  <Option key={code} value={code}>
                    {outputprefix[index]}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="ชื่อจริง"
              name="firstName"
              rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="นามสกุล"
              name="lastName"
              rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="วันเกิด"
              name="date"
              rules={[{ required: true, message: "กรุณากรอกวันเกิด" }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="สัญชาติ"
              name="nationality"
              initialValue="-- กรุณาเลือก --"
              rules={[{ required: true, message: "กรุณากรอกสัญชาติ" }]}
            >
              <Select>
                <Select.Option value="ไทย">ไทย</Select.Option>
                <Select.Option value="อเมริกัน">อเมริกัน</Select.Option>
                <Select.Option value="ฝรั่งเศส">ฝรั่งเศส</Select.Option>
                {/* เพิ่มสัญชาติอื่นๆ ตามต้องการ */}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="เลขบัตรประชาชน">
              <Input
                maxLength={1}
                style={{ width: "30px", marginRight: "8px" }}
              />
              <span className="mx-3">-</span>
              <Input
                maxLength={4}
                style={{ width: "60px", marginRight: "8px" }}
              />
              <span className="mx-3">-</span>
              <Input
                maxLength={5}
                style={{ width: "70px", marginRight: "8px" }}
              />
              <span className="mx-3">-</span>
              <Input
                maxLength={2}
                style={{ width: "40px", marginRight: "8px" }}
              />
              <span className="mx-3">-</span>
              <Input maxLength={1} style={{ width: "30px" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="หมายเลขโทรศัพท์มือถือ"
              name="phone"
              rules={[{ required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ" }]}
            >
              <Space.Compact>
                <Select
                  defaultValue={valuePhone[7]}
                  style={{ width: "120px" }}
                  onChange={(value) => setPhone2(value)}
                >
                  {valuePhone.map((code, index) => (
                    <Select.Option key={code} value={code}>
                      {outputPhone[index]}
                    </Select.Option>
                  ))}
                </Select>
                <span className="mx-3">-</span>
                <Input maxLength={9} style={{ width: "120px" }} />
              </Space.Compact>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="หนังสือเดินทาง" name="passport" initialValue="">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="เงินเดือนที่คาดหวัง"
              name="money"
              initialValue=""
              rules={
                [
                  { required: true, message: "กรุณากรอกเงินเดือนที่คาดหวัง" },
                ]
              }
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}></Col>
          <Col span={4}>
            <Form.Item>
              <Button htmlType="button" onClick={handleClear}>
                ล้างข้อมูล
              </Button>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Button htmlType="submit">ส่งข้อมูล</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default () => <FromDetail />;
