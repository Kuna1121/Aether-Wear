import {
  CreditCardOutlined,
  InboxOutlined,
  RollbackOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { SupportCardModel } from "../models";

export const Supportpconfig: SupportCardModel[] = [
  {
    id: "1",
    title: "Orders",
    icon: <InboxOutlined />,
    description: "Track your order, delivery issues and more.",
  },
  {
    id: "2",
    title: "Return & Refund",
    icon: <RollbackOutlined />,
    description: "Return policy, exchange or refund related queries.",
  },
  {
    id: "3",
    title: "Payment",
    icon: <CreditCardOutlined />,
    description: "Payment failures, invoices and billing questions.",
  },
  {
    id: "4",
    title: "Account",
    icon: <UserOutlined />,
    description: "Login issues, password reset and profile help.",
  },
];
