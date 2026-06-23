import api from "./axios";
import type { ApiResponse, Notification } from "@/types";


export const getAllNotifications = async () => {
    const response = await api.get<ApiResponse<Notification[]>>('/api/notifications')

    return response.data
}

export const markAsRead  = async (notificationId : string) => {
    const response = await api.put<ApiResponse<Notification>>(`/api/notifications/${notificationId}/read`)

    return response.data
}


export const markAsReadAll = async () => {
    const response = await api.put<ApiResponse<null>>('/api/notifications/read-all')

    return response.data
}


export const deleteNotifications = async (notificationId : string) => {
    const response = await api.delete<ApiResponse<null>>(`/api/notifications/${notificationId}`)

    return response.data
}