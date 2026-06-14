import { Card, Form, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import BasicButton from "../../shared/elements/buttons/basic-button";
import EmailInput from "../../shared/fields/email-input";
import PasswordInput from "../../shared/fields/password";
import { snackbar } from "../../shared/services";
import type { LoginFormValues } from "../models";
import { login } from "../services";

const { Title, Text } = Typography;

export default function LoginPage() {
  const [form] = Form.useForm<LoginFormValues>();
  const navigate = useNavigate();

  const onFinish = async (values: LoginFormValues) => {
    try {
      const response = await login(values);
      if (response) {
        snackbar.success("Login successful! Welcome back!");
        navigate("/home");
      }
    } catch (error) {
      snackbar.error(error);
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card wide-card">
        <div className="auth-header">
          <Title level={2}>Aether Wear</Title>
          <Text type="secondary">Welcome back! Please enter your details.</Text>
        </div>

        <Form
          form={form}
          name="login"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <EmailInput label="Email Address" name="email" />

          <PasswordInput label="Password" name="password" />

          <Form.Item>
            <BasicButton text="Log In" htmlType="submit" type="primary" />
          </Form.Item>
        </Form>

        <div className="auth-footer">
          <Text>
            Don't have an account? <Link to="/signup">Create one</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}
