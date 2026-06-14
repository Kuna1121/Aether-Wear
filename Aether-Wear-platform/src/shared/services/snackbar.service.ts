import { App } from "antd";
import type { MessageInstance } from "antd/es/message/interface";

let activeMessage: MessageInstance | null = null;

// Component to extract the active React 18 message instance
export function AntdStaticHolder() {
  const staticFunctions = App.useApp();
  activeMessage = staticFunctions.message;
  return null;
}

export const snackbar = {
  success: (msg) => {
    const content = typeof msg === "string" ? msg : msg?.message || String(msg);
    if (activeMessage) {
      activeMessage.success({
        content,
        duration: 3,
      });
    } else {
      console.log("Success toast:", content);
    }
  },
  error: (msg) => {
    const content = typeof msg === "string" ? msg : msg?.message || String(msg);
    if (activeMessage) {
      activeMessage.error({
        content,
        duration: 4,
      });
    } else {
      console.error("Error toast:", content);
    }
  },
  info: (msg: string) => {
    if (activeMessage) {
      activeMessage.info({
        content: msg,
        duration: 3,
      });
    }
  },
  warning: (msg: string) => {
    if (activeMessage) {
      activeMessage.warning({
        content: msg,
        duration: 3,
      });
    }
  },
  handleResponse: (response, successMessage?: string) => {
    if (!response) {
      snackbar.error("No response received from the server.");
      return;
    }
    const status = response.status;
    if (status >= 200 && status < 300) {
      snackbar.success(
        successMessage || `Action completed successfully. (Status ${status})`,
      );
    } else {
      const errorMsg =
        response.data?.message || `Request failed with status ${status}.`;
      snackbar.error(errorMsg);
    }
  },
};
