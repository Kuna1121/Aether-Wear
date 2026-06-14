import axios from "axios";
import { environment } from "../../../environment/environment";
import type { SupportTicketPayload } from "../models";

const API_URL = environment.API_URL;

export async function submitSupportTicket(payload: SupportTicketPayload) {
  const response = await axios.post(`${API_URL}/support`, payload);
  return response;
}

export async function getReasons() {
  const response = (await axios.get(`${API_URL}/reason`)).data;
  return response;
}
