import { useAuth } from "@/hooks/useAuth";
import { Loader } from "lucide-react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children} : {children : React.ReactNode}) => {
    const {userData, isLoading} = useAuth()

    if(isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader className="w-8 h-8 spin-in"/>
            </div>
        )
    }

    if(!userData?.data) {
        return <Navigate to={'/login'} replace />
    }

    return <>{children}</>
}

export default ProtectedRoute