import {
  CarOutlined,
  SwapOutlined,
  SafetyCertificateOutlined,
  StarOutlined,
} from "@ant-design/icons";
import type { ChooseUsModel } from "../models";

export const ChooseUs: ChooseUsModel[] = [
  {
    icon: <CarOutlined />,
    title: "Free Shipping",
    description: "Fast delivery on all eligible orders.",
  },
  {
    icon: <SwapOutlined />,
    title: "Easy Returns",
    description: "Hassle-free returns and exchanges.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Secure Payments",
    description: "100% safe and encrypted checkout.",
  },
  {
    icon: <StarOutlined />,
    title: "Premium Quality",
    description: "Stylish, durable, and made to last.",
  },
];

