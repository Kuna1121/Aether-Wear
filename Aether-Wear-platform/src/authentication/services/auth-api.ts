import axios from "axios";
import type { LoginFormValues, SignupFormValues } from "../models";
import { environment } from "../../environment/environment";

const API_URL = environment.API_URL;

export async function login(payload: LoginFormValues) {
  const response = (await axios.get(`${API_URL}/users`)).data;

  const matchedUser = response.find(
    (res: SignupFormValues) =>
      payload.email === res.email && payload.password === res.password,
  );

  if (!matchedUser) {
    throw new Error("Invalid Credentials");
  }

  return matchedUser;
}

export async function register(payload: SignupFormValues) {
  const users = (await axios.get(`${API_URL}/users`)).data;

  const isEmailExists = users.find(
    (res: SignupFormValues) => payload.email === res.email,
  );
  if (isEmailExists) {
    throw new Error("Email already exists");
  }
  delete payload.confirmPassword;
  const response = await axios.post(`${API_URL}/users`, payload);
  return response;
}
