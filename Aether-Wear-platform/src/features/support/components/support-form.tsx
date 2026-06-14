import { Card, Form, Input } from "antd";
import { useEffect } from "react";
import { BasicButton } from "../../../shared/elements/buttons";
import { EmailInput, SelectInput } from "../../../shared/fields";
import type { SupportFormProps } from "../models";

const REASON_OPTIONS = [
  { value: "Product Inquiry", label: "Product Inquiry" },
  { value: "Order Status & Tracking", label: "Order Status & Tracking" },
  { value: "Returns & Exchanges", label: "Returns & Exchanges" },
  { value: "Technical support", label: "Technical Support" },
  { value: "Feedback & Suggestions", label: "Feedback & Suggestions" },
  { value: "Other", label: "Other" },
];

export default function SupportForm({ email, onSubmit }: SupportFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (email) {
      form.setFieldsValue({ email });
    }
  }, [email, form]);

  const onFinish = (values: {
    email: string;
    reason: string;
    description: string;
  }) => {
    onSubmit(values);
    form.resetFields();
    form.setFieldsValue({ email });
  };

  return (
    <Card className="support-card">
      <Form
        form={form}
        name="support-form"
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <EmailInput
          label="Email Address"
          name="email"
          placeholder="e.g. yourname@example.com"
          disabled={true}
        />

        <SelectInput
          label="Reason for Inquiry"
          name="reason"
          placeholder="Select a reason"
          options={REASON_OPTIONS}
          rules={[{ required: true, message: "Please select a reason" }]}
        />

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please provide a description of your issue",
            },
          ]}
        >
          <Input.TextArea
            rows={6}
            placeholder="Describe your issue or question in detail..."
          />
        </Form.Item>

        <div className="support-form-footer">
          <div className="support-reassurance">
            <svg
              className="support-reassurance-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>
              We'll surely reply and solve your problem as soon as possible.
            </span>
          </div>

          <div className="support-submit-container">
            <BasicButton text="Send" htmlType="submit" type="primary" />
          </div>
        </div>
      </Form>
    </Card>
  );
}
