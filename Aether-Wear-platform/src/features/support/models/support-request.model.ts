export interface SupportTicketPayload {
  email: string;
  reason: string;
  description: string;
  createdAt?: string;
  userId?: string;
}
