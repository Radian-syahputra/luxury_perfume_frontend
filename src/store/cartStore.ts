import {create} from 'zustand'
import type { Cart } from '@/types'


interface StoreType {
    cart : Cart | null
    totalItems : number

    setCart : (cart : Cart | null) => void
    clearCart : () => void
}


const useCartStore = create<StoreType>((set) => ({
    cart : null,
    totalItems : 0,

    setCart : (cart) => set ({
        cart,
        totalItems : cart?.cartItems.reduce((total, item) => total + item.quantity, 0) || 0
    }),
    clearCart : () => set({cart : null, totalItems : 0})
}))


export default useCartStore