import type { Product } from "@/types";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const ProductCard = ({product} : {product : Product}) => {
  return (
    <Link to={`/products/${product.id}`}>
        <Card className="hover:shadow-lg transition cursor-pointer">
            <img src={product.imageUrl || 'placeholder.jpg'} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />

            <CardContent className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.brand}</p>
                <p className="text-xs text-gray-400">{product.category}</p>
            </CardContent>
        </Card>
    </Link>
  )
}

export default ProductCard


