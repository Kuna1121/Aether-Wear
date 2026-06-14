export interface SupportFormProps {
  email: string;
  onSubmit: (values: {
    email: string;
    reason: string;
    description: string;
  }) => Promise<void>;
}
