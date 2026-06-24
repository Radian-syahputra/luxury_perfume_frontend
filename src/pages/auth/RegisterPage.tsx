import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader } from "lucide-react"


const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {registerMutation} = useAuth()
  const navigate = useNavigate()


  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerMutation.mutate({name, email, password}, {
      onSuccess : () => navigate("/login")
    })
  } 

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Resgiter</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Input Your Name" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"/>
              </div>
              <div>
                <Label>Password</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******"/>
              </div>

              <Button className="w-full" type="submit" disabled={registerMutation.isPending}>
                {registerMutation.isPending ? <Loader className="w-4 h-4 spin-in"/> : 'Register'}
              </Button>

              <p className="text-center text-sm">
                Sudah Punya Akun? {' '}
                <Link to={'/login'} className="text-blue-500 hover:underline">Login</Link>
              </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPage