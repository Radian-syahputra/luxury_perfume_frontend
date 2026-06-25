import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductById } from "@/api/product";



// Get All Products
export const useProducts = (search? : string, category? : string ) => {
    const {data, isLoading} = useQuery({
        queryKey : ['products', search, category],
        queryFn : () => getProducts(search, category)
    })

    return {data, isLoading}
}


export const useProductDetail = (productId : string) => {
    const {data, isLoading} = useQuery({
        queryKey : ['product', productId],
        queryFn : () => getProductById(productId),
        enabled: !!productId
    })

    return {data, isLoading}
}

