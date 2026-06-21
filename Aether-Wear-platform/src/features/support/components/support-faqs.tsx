import { Accordion } from "../../../shared/components";
import { SupportFaqConfig } from "../config/support-faq.config";
import "./support-faqs.css";

export default function SupportFaqs() {
  const items = SupportFaqConfig.map((faq) => ({
    key: faq.id,
    label: (
      <div className="faq-label-wrapper">
        <span className="faq-icon">?</span>
        <span className="faq-text">{faq.question}</span>
      </div>
    ),
    children: <p>{faq.answer}</p>,
  }));

  return (
    <div className="support-faqs-section">
      <div className="support-faqs-header">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="support-faqs-container">
        <Accordion items={items} />
      </div>
    </div>
  );
}
