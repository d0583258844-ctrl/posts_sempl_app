import {create } from "zustand"
import { loginRequest, RegisterRequest, type RegisterFormData, type User } from "../services/authServices";

interface AuthState {
    user: User|null;
    login: (formData: FormData) => Promise<User| null>
}