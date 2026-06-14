import { Form, Input } from "antd";

const PasswordInput = ({
  label = "Password",
  name = "password",
  placeholder = "Enter password",
  rules = [],
  dependencies = [],
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      dependencies={dependencies}
      rules={[
        {
          required: true,
          message: `${label} is required`,
        },
        ...rules,
      ]}
    >
      <Input.Password size="large" placeholder={placeholder} />
    </Form.Item>
  );
};

export default PasswordInput;
