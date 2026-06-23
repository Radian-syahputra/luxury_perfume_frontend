import api from "./axios";
import type { ApiResponse, Review } from "@/types";


export const getReviewsByProduct  = async (productId : string) => {
    const response = await api.get<ApiResponse<Review[]>>(`/api/reviews/${productId}`)

    return response.data
}



export const createReview = async (productId : string, rating : number, comment? : string) => {
    const response = await api.post<ApiResponse<Review>>(`/api/reviews/${productId}/add`, {
        rating,
        comment
    })

    return response.data
}

export const deleteReview = async (reviewId : string) => {
    const response = await api.delete<ApiResponse<null>>(`/api/reviews/${reviewId}/delete`)

    return response.data
}