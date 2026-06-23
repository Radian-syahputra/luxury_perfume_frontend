import api from "./axios";
import type { ApiResponse, User } from "@/types";


export const getDashboardStats = async () => {
    const response = await api.get<ApiResponse<any>>('/api/admin/dashboard')
    return response.data
}

export const getAllUsers = async () => {
    const response = await api.get<ApiResponse<User[]>>('/api/admin/users')
    return response.data
}

export const updateUserRole = async (userId : string, role : string) => {
    const response = await api.put<ApiResponse<User>>(`/api/admin/users/${userId}/role`, {
        role
    })
    return response.data
}


export const deleteUser = async (userId : string) => {
    const response = await api.delete<ApiResponse<null>>(`/api/admin/users/${userId}`)
    return response.data
}