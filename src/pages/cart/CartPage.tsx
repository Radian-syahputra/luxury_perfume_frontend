import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Trash } from "lucide-react"
import { Link } from "react-router-dom"


const CartPage = () => {
    const {cartData,updateCartItemMutation, removeCartItemMutation, clearCartMutation} = useCart()

    const cart = cartData?.data
    const cartItems = cart?.cartItems || []

    // Total harga
    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.productVariant.price * item.quantity)
    }, 0)  

    if(cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-96 space-y-4">
                <p className="text-gray-500 text-lg">Keranjang Masih Kosong</p>
                <Link to={'/products'}>Belanja Sekarang</Link>
            </div>
        )
    }
  return (
    <div className="grid grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Keranjang Belanja</h1>
                <Button variant={'destructive'} size={'sm'} onClick={() => clearCartMutation.mutate()}>Hapus Semua</Button>
            </div>

             {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 border rounded-xl p-4">
                        <img
                            src={item.productVariant.product.imageUrl || '/placeholder.jpg'}
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1 space-y-2">
                            <h3 className="font-semibold">{item.productVariant.product.name}</h3>
                            <p className="text-sm text-gray-500">
                                {item.productVariant.concentration} - {item.productVariant.bottleSize}
                            </p>
                            <p className="font-bold">Rp {item.productVariant.price.toLocaleString('id-ID')}</p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm"
                                    onClick={() => updateCartItemMutation.mutate({
                                        cartItemId: item.id,
                                        quantity: item.quantity - 1
                                    })}>-</Button>
                                <span>{item.quantity}</span>
                                <Button variant="outline" size="sm"
                                    onClick={() => updateCartItemMutation.mutate({
                                        cartItemId: item.id,
                                        quantity: item.quantity + 1
                                    })}>+</Button>
                                <Button variant="ghost" size="sm"
                                    onClick={() => removeCartItemMutation.mutate({ cartItemId: item.id })}>
                                    <Trash className="w-4 h-4 text-red-500"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>


        <div className="border rounded-xl p-6 space-y-4 h-fit">
            <h2 className="text-xl font-bold">Ringkasan</h2>
            <Separator/>
            <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold">Rp. {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <Separator/>
            <Link to={'/checkout'}>
                <Button className="w-full">CheckOut</Button>
            </Link>
        </div>
    </div>
  )
}

export default CartPage