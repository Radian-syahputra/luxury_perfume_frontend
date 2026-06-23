import api from "./axios";
import type { ApiResponse,  Order} from "@/types";



export const getMyOrder = async () => {
    const response = await api.get<ApiResponse<Order[]>>('/api/orders/my-orders')
    return response.data
}


export const createOrder = async (shippingAddress : string) => {
    const response = await api.post<ApiResponse<Order>>('/api/orders', {
        shippingAddress
    })

    return response.data
}


export const cancelOrder = async (orderId : string) => {
    const response = await api.put<ApiResponse<Order>>(`/api/orders/${orderId}/cancel`)

    return response.data
}


export const getOrderById = async (orderId : string) => {
    const response = await api.get<ApiResponse<Order>>(`/api/orders/${orderId}`)

    return response.data
}



// ADMIN 

export const getAllOrders = async () => {
    const response = await api.get<ApiResponse<Order[]>>('/api/orders')
    return response.data
}


export const updateOrderStatus = async (orderId : string, status : string, trackingNumber? : string) => {
    const response = await api.put<ApiResponse<Order>>(`/api/orders/${orderId}/status`, {
        trackingNumber,
        status
    })

    return response.data
}