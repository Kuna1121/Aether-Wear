import { Form, Input } from "antd";

const TextInput = ({
  label,
  name,
  placeholder,
  rules = [],
  disabled = false,
  size,
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input placeholder={placeholder} disabled={disabled} size={size} />
    </Form.Item>
  );
};

export default TextInput;
