import type { SupportTicketPayload } from "./support-request.model";

export interface SupportFormProps {
  email: string;
  onSubmit: (values: SupportTicketPayload) => void;
}
