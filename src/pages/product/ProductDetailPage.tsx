import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductDetail } from "@/hooks/useProduct";
import { useCart } from "@/hooks/useCart";
import type { ProductVariant } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useProductDetail(id!);
  const { addToCartMutation } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [quantity, setQuantity] = useState(1);

  const product = data?.data;

  if (isLoading) return <div>Loading..</div>;
  if (!product) return <div>Product Tidak Di Temukan</div>;

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Foto Product */}
      <div>
        <img
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.name}
          className="w-full rounded-xl object-cover"
        />
      </div>

      {/* info product */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.brand}</p>
          <Badge>{product.category}</Badge>
        </div>

        <Separator />
        <p className="text-gray-600">{product.description}</p>

        {/* Pilih Variant */}
        <div className="space-y-2">
          <h3 className="font-semibold">Pilih Variant : </h3>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant) => (
              <Button
                key={variant.id}
                variant={
                  selectedVariant?.id === variant.id ? "default" : "outline"
                }
                onClick={() => setSelectedVariant(variant)}
                size={"sm"}>
                {variant.concentration} - {variant.bottleSize}
              </Button>
            ))}
          </div>
        </div>

        {/* harga */}
        {selectedVariant && (
          <p className="text-2xl font-bold">
            Rp. {selectedVariant.price.toLocaleString("id-ID")}
          </p>
        )}

        {/* Quantity */}
        {selectedVariant && (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </Button>
            <span className="font-semibold">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity((q) => q + 1)}>
              +
            </Button>
          </div>
        )}

        <Separator/>

        {/* Add To Cart */}
        <Button className="w-full" disabled={!selectedVariant || addToCartMutation.isPending} onClick={() => {
            if(selectedVariant) {
                addToCartMutation.mutate({
                    variantId : selectedVariant.id,
                    quantity
                })
            }
        }}>
            {addToCartMutation.isPending ? "Menambahkan..." : "Tambah Ke Keranjang" }
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
