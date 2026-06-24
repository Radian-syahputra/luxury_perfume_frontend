import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import {
  getCart,
  addToCart,
  clearCart,
  removeCartItem,
  updateCartItem,
} from "@/api/cart";
import useCartStore from "@/store/cartStore";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const useCart = () => {
  const { clearCart: clearCartStore, setCart } = useCartStore();
  const QueryClient = useQueryClient();

  // Get Cart Pakai UseQuery
  const { data: cartData, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  useEffect(() => {
    if (cartData?.data) {
      setCart(cartData.data);
    }
  }, [cartData]);

  // AddToCart pakai useMutation
  const addToCartMutation = useMutation({
    mutationFn: ({
      variantId,
      quantity,
    }: {
      variantId: string;
      quantity: number;
    }) => addToCart(variantId, quantity),
    onSuccess: (data) => {
      toast.success(data.message),
        QueryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Gagal Membahkan Cart");
    },
  });

  // Update Cart
  const updateCartItemMutation = useMutation({
    mutationFn: ({
      cartItemId,
      quantity,
    }: {
      cartItemId: string;
      quantity: number;
    }) => updateCartItem(cartItemId, quantity),
    onSuccess: (data) => {
      toast.success(data.message);
      QueryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Gagal Mengupdate Cart");
    },
  });

  // Remove Cart Item
  const removeCartItemMutation = useMutation({
    mutationFn: ({ cartItemId }: { cartItemId: string }) =>
      removeCartItem(cartItemId),
    onSuccess: (data) => {
      toast.success(data.message),
        QueryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Gagal Menghapus Cart Item");
    },
  });

  const clearCartMutation = useMutation({
    mutationFn: clearCart,
    onSuccess: (data) => {
      clearCartStore(),
        toast.success(data.message),
        QueryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Gagal Menghapus Cart Item");
    },
  });


  return {
       cartData,
        isLoading,
        addToCartMutation,
        updateCartItemMutation,
        removeCartItemMutation,
        clearCartMutation
  }
};
