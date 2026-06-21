import { useState } from "react";
import { snackbar } from "../../../shared/services";
import {
  SupportBanner,
  SupportCards,
  SupportFaqs,
  SupportForm,
  SupportHeader,
  SupportReachUs,
} from "../components";
import type { SupportTicketPayload } from "../models";
import { submitSupportTicket } from "../services";
import "./support.css";

export default function Support() {
  const [email] = useState(() => {
    const storedUser = localStorage.getItem("user");
    try {
      const { email } = JSON.parse(storedUser);
      return email || "";
    } catch {
      return "";
    }
  });

  const handleFormSubmit = async (values: SupportTicketPayload) => {
    try {
      const payload = {
        ...values,
        createdAt: new Date().toISOString(),
      };
      const response = await submitSupportTicket(payload);
      if (response) {
        snackbar.success(
          "We have received your request and will get back to you shortly.",
        );
      }
    } catch (error) {
      snackbar.error(error);
    }
  };

  return (
    <div className="support-page-container">
      <div className="support-page-content">
        <SupportHeader />
        <SupportForm email={email} onSubmit={handleFormSubmit} />
        <SupportFaqs />
        <SupportReachUs />
        <SupportBanner />
      </div>
    </div>
  );
}
