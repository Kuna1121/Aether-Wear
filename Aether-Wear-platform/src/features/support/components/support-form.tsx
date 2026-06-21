import { Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { BasicButton } from "../../../shared/elements/buttons";
import { EmailInput, SelectInput } from "../../../shared/fields";
import type {
  Reasons,
  SupportFormProps,
  SupportTicketPayload,
} from "../models";
import { getReasons } from "../services";
import { snackbar } from "../../../shared/services";

export default function SupportForm({ email, onSubmit }: SupportFormProps) {
  const [form] = Form.useForm();
  const [reasonOptions, setReasonOptions] = useState<Reasons[]>([]);

  useEffect(() => {
    if (email) {
      form.setFieldsValue({ email });
    }
    getReasons()
      .then((data) => {
        setReasonOptions(data);
      })
      .catch((error) => {
        snackbar.error(error);
      });
  }, []);

  const onFinish = (values: SupportTicketPayload) => {
    onSubmit(values);
    form.resetFields();
    form.setFieldsValue({ email });
  };

  return (
    <Card className="support-card">
      <div className="support-form-header">
        <h2>Send us a Message</h2>
        <p>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <Form
        form={form}
        name="support-form"
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <EmailInput label="Email Address" name="email" disabled={true} />

        <SelectInput
          label="Reason for Inquiry"
          name="reason"
          placeholder="Select a reason"
          options={reasonOptions}
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
            <BasicButton text="Send Message" htmlType="submit" type="primary" />
          </div>
        </div>
      </Form>
    </Card>
  );
}
