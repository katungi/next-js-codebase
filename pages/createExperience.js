import { useEffect, useState } from "react";
import Link from "next/link";
import { Form, Select, Button, Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
export default function createExperiences() {
  const [categories, setCategories] = useState([]);

  const { Option } = Select;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    let initialCategories = [];

    fetch("http://localhost:8000/api/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        initialCategories = data.map((category) => {
          return category;
        });
        console.log(initialCategories);
        setCategories(initialCategories);
      });
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <Form.Item
          name="Experience"
          label="Experience"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="Description" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="select"
          label="Select"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select The Category for Experience",
            },
          ]}
        >
          <Select
            placeholder="Please select The Category for Experience"
            onChange={handleChange}
          >
            {categories.map((category, index) => {
              console.log(`${category.name}, ${index}`);
              <Option key={category._id}>{category.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action={normFile}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
