import { Form, Select } from "antd";

const SelectInput = ({
  label,
  name,
  options = [],
  placeholder,
  rules = [],
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select size="large" placeholder={placeholder} options={options} />
    </Form.Item>
  );
};

export default SelectInput;
