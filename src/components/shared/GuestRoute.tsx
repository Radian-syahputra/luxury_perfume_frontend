import { useAuth } from "@/hooks/useAuth"
import { Navigate } from "react-router-dom"

const GuestRoute = ({ children }: { children: React.ReactNode }) => {
    const { userData, isLoading } = useAuth()

    // Kalau masih loading → tampilkan children langsung
    if(isLoading) return <>{children}</>

    if(userData?.data) {
        return <Navigate to="/" replace />
    }

    return <>{children}</>
}

export default GuestRoute