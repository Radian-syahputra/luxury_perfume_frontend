import  { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {Loader} from 'lucide-react'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {loginMutation} = useAuth()
    const navigate = useNavigate()


    const handleSubmit =(e : React.FormEvent) => {
        e.preventDefault()
        loginMutation.mutate({email, password}, {
            onSuccess : () => navigate('/')
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label>Email</Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com"/>
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*****" />
                    </div>

                    <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
                        {loginMutation.isPending ?  <Loader className="w-4 h-4 spin-in"/> : "Login"}
                    </Button>

                    <p className="text-center text-sm">
                        Belum Punya Akun? {' '}
                        <Link to={'/register'} className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default LoginPage