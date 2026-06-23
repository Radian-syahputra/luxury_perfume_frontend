import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMe,login, register, logout } from "@/api/auth";
import useAuthStore from "@/store/authStore";
import toast from "react-hot-toast";


export const useAuth = () => {
    const {setUser, logout: logoutStore} = useAuthStore()
    const queryClient = useQueryClient()

    // get current User 
    const {data : userData, isLoading} = useQuery({
        queryKey : ['me'],
        queryFn : getMe,
        retry : false
    })

    // Login
    const loginMutation = useMutation({
        mutationFn : ({email , password} : {email : string , password : string}) => 
            login(email, password),
        onSuccess : (data) => {
            setUser(data.data),
            toast.success(data.message),
            queryClient.invalidateQueries({ queryKey: ['me'] })
        },
        onError : (err : any) => {
            toast.error(err.response?.data?.message || "Login Gagal")
        }
        
    })
    
    // Register
    const registerMutation = useMutation({
        mutationFn : ({name, email, password} : {name : string, email : string, password : string}) => 
            register(name, email, password),
        onSuccess : (data) => {
            toast.success(data.message)
        },
        onError : (err : any) => {
            toast.error(err.response?.data?.message || "Register Gagal")
        }
    })

    // Logout
    const logoutMutation = useMutation({
        mutationFn : logout,
        onSuccess : () => {
            logoutStore()
            queryClient.removeQueries({queryKey : ["me"]}),
            toast.success("Berhasil Logout")
        },
        onError : (err : any) => {
            toast.error(err.response?.data?.message || "Logout Gagal")
        }
    })


    return {
        userData,
        isLoading,
        loginMutation,
        registerMutation,
        logoutMutation
    }
    
}