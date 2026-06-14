import axios from "axios";
import { environment } from "../../../environment/environment";
import type { Users } from "../../models";

const API_URL = environment.API_URL;

export async function me(id: string) {
  const totalData = (await axios.get(`${API_URL}/users`)).data;
  const user = totalData.find((item: Users) => item.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export function logout() {
  localStorage.removeItem("user");
  return true;
}
