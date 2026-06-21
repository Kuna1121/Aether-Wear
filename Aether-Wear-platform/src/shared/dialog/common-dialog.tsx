import { Button, Modal } from "antd";
import "./common-dialog.css";
import type { CommonDialogProps } from "../models";

export function CommonDialog({
  isOpen,
  onClose,
  heading,
  description,
  primaryButtonText = "Confirm",
  secondaryButtonText = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
}: CommonDialogProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable={true}
      className="common-dialog"
      centered
      width={420}
    >
      <div className="common-dialog-content">
        {heading && <h3 className="common-dialog-heading">{heading}</h3>}
        <p className="common-dialog-description">{description}</p>

        <div className="common-dialog-actions">
          <Button
            className="common-dialog-btn-secondary"
            onClick={onSecondaryClick || onClose}
          >
            {secondaryButtonText}
          </Button>
          <Button
            type="primary"
            className="common-dialog-btn-primary"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
