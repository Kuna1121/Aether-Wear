import { Button } from "antd";

const BasicButton = ({ text, htmlType, loading = false, type }) => {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      loading={loading}
      size="large"
      block
    >
      {text}
    </Button>
  );
};

export default BasicButton;
