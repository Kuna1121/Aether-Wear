import { Form, Input } from "antd";

const EmailInput = ({
  label = "Email",
  name = "email",
  placeholder = "Enter your email",
  rules = [],
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: "Email is required",
        },
        {
          type: "email",
          message: "Enter valid email",
        },
        ...rules,
      ]}
    >
      <Input size="large" placeholder={placeholder} />
    </Form.Item>
  );
};

export default EmailInput;
