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
  const { registerMutation } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerMutation.mutate({ name, email, password }, {
      onSuccess: () => navigate("/login")
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_18%)]" />
      <div className="relative w-full max-w-xl">
        <Card className="relative overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 opacity-20 blur-3xl" />
          <CardHeader className="relative z-10 p-8 pt-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <CardTitle className="text-3xl font-semibold text-white">Create Account</CardTitle>
                <p className="mt-2 text-sm text-slate-300">Daftar dan temukan wewangian mewah pilihan Anda.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-200">
                Luxury Perfume
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-5">
                  <Label className="text-sm font-medium text-slate-300">Name</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Input Your Name"
                    className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="mb-5">
                  <Label className="text-sm font-medium text-slate-300">Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-300">Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*******"
                    className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <Button
                className="w-full rounded-3xl bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 px-5 py-3 text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin text-white" />
                    <span>Registering...</span>
                  </>
                ) : (
                  'Register'
                )}
              </Button>

              <p className="text-center text-sm text-slate-400">
                Sudah punya akun?{' '}
                <Link to={'/login'} className="font-semibold text-white transition hover:text-cyan-300">Login</Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default RegisterPage