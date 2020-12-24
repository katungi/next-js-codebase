import Link from 'next/link'
import {
  Form,
  Select,
  Button,
  Upload,
  Input
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Axios from 'axios';

export default function createExperiences() {
  const { Option } = Select;
  const formData = new FormData();
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      formData.append('file', e);
      formData.append('upload_preset', 'rhkex9av');
      const options = {
        body: formData,
      }
      return Axios.post('https://api.cloudinary.com/v1_1/dankatdennis2758/image/upload', options)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
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
          <Select placeholder="Please select The Category for Experience">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
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
          <Button type="primary" htmlType="submit" >
            <Link href="/"><a>Submit</a></Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
