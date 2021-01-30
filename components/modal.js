import { useState } from "react";
import { Button, Modal, Result } from "antd";
export default function header() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Result
        status="success"
        title={`You just Booked experience`}
        subTitle="Experience number: 2017182818828182881 We are sending you an email in a few"
        extra={[
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ background: "#f53398", borderColor: "white" }}
            onClick={bookEvent}
          >
            Book some more
          </Button>,
        ]}
      />
      ,
    </Modal>
  );
}
