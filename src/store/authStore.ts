import type { User } from '@/types'
import {create} from 'zustand'


interface StoreType {
    user : User | null

    setUser : (user : User | null) => void
    logout : () => void
}

const useAuthStore = create<StoreType>((set) => ({
    user : null,

    setUser: (user) => set({ user }),
    logout: () => set({ user: null })
}))

export default useAuthStore