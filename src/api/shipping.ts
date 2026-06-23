import api from "./axios";


export const getProvinces  = async () => {
    const response = await api.get('/api/shipping/provinces')
    return response.data
}

export const getCities = async (provinceId : string) => {
    const response = await api.get('/api/shipping/cities', {
        params : {provinceId}
    })

    return response.data
}

export const getDistricts = async (cityId : string) => {
    const response = await api.get("/api/shipping/districts", {
        params : {cityId}
    })
    return response.data
}

export const checkOngkir  = async (origin : string, destination : string, weight : number, courier : string) => {
    const response = await api.post('/api/shipping/check', {
        origin,
        destination,
        weight,
        courier
    })
    return response.data
}


export const trackResi = async (awb : string, courier : string, lastPhoneNumber : string) => {
    const response = await api.post('/api/shipping/track', {
        awb,
        courier,
        lastPhoneNumber
    })

    return response.data
}