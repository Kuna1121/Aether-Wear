import { Form, Input } from "antd";

const EmailInput = ({
  label = "Email",
  name = "email",
  placeholder = "Enter your email",
  rules = [],
  disabled = false,
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
      <Input size="large" placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );
};

export default EmailInput;
