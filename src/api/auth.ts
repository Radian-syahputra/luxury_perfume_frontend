import api from "./axios";
import type { ApiResponse, User } from "@/types";


export const register = async (name : string, email : string, password : string) => {
    const response = await api.post<ApiResponse<User>>('/api/auth/register', {
        name, email, password
    })
    return response.data
}

export const login = async (email : string, password : string) => {
    const response = await api.post<ApiResponse<User>>('/api/auth/login', {
        email, password
    })

    return response.data
}


export const logout = async () => {
    const response = await api.post<ApiResponse<User>>('/api/auth/logout')
    return response.data
}


export const getMe = async () => {
    const response = await api.get<ApiResponse<User>>('/api/auth/me')
    return response.data
}