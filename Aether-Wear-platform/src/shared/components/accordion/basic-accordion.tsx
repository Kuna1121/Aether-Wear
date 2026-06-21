import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import "./accordion.css";

interface BasicAccordionProps {
  items: CollapseProps["items"];
  defaultActiveKey?: string | string[];
}

export default function Accordion({
  items,
  defaultActiveKey,
}: BasicAccordionProps) {
  return (
    <Collapse
      className="basic-accordion"
      items={items}
      defaultActiveKey={defaultActiveKey}
      expandIconPosition="end"
      bordered={false}
    />
  );
}
