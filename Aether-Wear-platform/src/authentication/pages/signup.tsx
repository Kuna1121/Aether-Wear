import { Card, Form, Typography, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, PasswordInput, TextInput } from "../../shared/fields";
import { BasicButton } from "../../shared/elements/buttons";
import type { SignupFormValues } from "../models";
import { register } from "../services";
import { snackbar } from "../../shared/services";

const { Title, Text } = Typography;

export default function SignupPage() {
  const [form] = Form.useForm<SignupFormValues>();
  const navigate = useNavigate();

  const onFinish = async (values: SignupFormValues) => {
    try {
      const response = await register(values);
      if (response) {
        snackbar.success("User Registered Successfully");
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
          <Text type="secondary">
            Join us today! Create your account below.
          </Text>
        </div>

        <Form
          form={form}
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Row gutter={16}>
            <Col span={12}>
              <TextInput
                label="Full Name"
                name="name"
                placeholder="e.g. John Doe"
                rules={[{ required: true, message: "Required" }]}
                size="large"
              />
            </Col>
            <Col span={12}>
              <EmailInput
                label="Email Address"
                name="email"
                placeholder="joe@example.com"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <PasswordInput
                label="Password"
                name="password"
                placeholder="John@654"
                rules={[{ min: 6, message: "Min 6 chars" }]}
              />
            </Col>
            <Col span={12}>
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                dependencies={["password"]}
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password Does Not Match!"),
                      );
                    },
                  }),
                ]}
              />
            </Col>
          </Row>

          <Form.Item style={{ marginTop: 8 }}>
            <BasicButton
              text="Create Account"
              htmlType="submit"
              type="primary"
            />
          </Form.Item>
        </Form>

        <div className="auth-footer">
          <Text>
            Already have an account? <Link to="/login">Log in</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}
