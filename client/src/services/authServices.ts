
const API_BASE_URL = "http://localhost:8000/ai/auth"

interface User {
    id: string;
    fullName: string;
    email: string
    role: "user" | "admin"
}

interface Posts {
    title: string;
    author: User | null;
    content: string
}

export const apiRequestPost = async (url: string, body: any) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error during register request:", error);
        throw error;
    }
}


export const apiRequestGet = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: "GET",
        })
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error during get request:", error);
        throw error;
    }
}

interface FormData {
    email: string,
    password: string
}

export interface RegisterFormData extends FormData {
    fullName: string;
    role?: "user" | "admin";
    posts?: Posts[] | []
}

export const loginRequest = async (url: string, method: string, body?: any) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error("Login failed")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error during login", error)
        throw error
    }
}


export const RegisterRequest = (formData: FormData) => {
    apiRequestPost(`${API_BASE_URL}/register`, formData)
}