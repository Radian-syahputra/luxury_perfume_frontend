import api from "./axios";
import type { ApiResponse, Product } from "@/types";


export const getProducts = async (search? : string, category? : string) => {
    const response = await api.get<ApiResponse<Product[]>>('/api/products', {
        params : {search, category}
    })

    return response.data
}


export const getProductById = async (productId : string) => {
    const response = await api.get<ApiResponse<Product>>(`/api/products/${productId}`)
    return response.data
}   


export const createProduct = async (data : FormData) => {
    const response = await api.post<ApiResponse<Product>>('/api/products/', data, {
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    })

    return response.data
}

export const updateProduct = async ( productId : string ,data : FormData) => {
    const response = await api.put<ApiResponse<Product>>(`/api/products/${productId}`, data, {
        headers : {
            "Content-Type" : 'multipart/form-data'
        }
    })

    return response.data
}


export const deleteProduct = async (productId : string) => {
    const response = await api.delete<ApiResponse<null>>(`/api/products/${productId}`)
    return response.data
}