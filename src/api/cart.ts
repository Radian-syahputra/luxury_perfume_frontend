import api from "./axios";
import type { ApiResponse, Cart } from "@/types";


export const getCart = async () => {
    const response = await api.get<ApiResponse<Cart>>('/api/carts')
    return response.data
}

export const addToCart = async (variantId : string, quantity : number) => {
    const response = await api.post<ApiResponse<Cart>>('/api/carts', {
        variantId, 
        quantity
    })

    return response.data
}


export const updateCartItem = async (cartItemId : string, quantity : number) => {
    const response = await api.put<ApiResponse<Cart>>(`/api/carts/${cartItemId}`, {
        quantity
    })

    return response.data
}


export const removeCartItem  = async (cartItemId : string) => {
    const response = await api.delete<ApiResponse<Cart>>(`/api/carts/${cartItemId}`)
    return response.data
}


export const clearCart = async () => {
    const response = await api.delete<ApiResponse<Cart>>('/api/carts/')
    return response.data
}