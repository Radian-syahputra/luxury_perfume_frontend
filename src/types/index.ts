export interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
  createdAt: string;
  updatedAt: string;
}

// Auth Response
export interface AuthResponse {
  success: boolean;
  message: string;
  data: User | null;
}

// API Response generic
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ProductVariant {
  id: string;
  productId: string;
  concentration: "EDP" | "EXTRAIT";
  bottleSize: "ML_30" | "ML_50" | "ML_100";
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: "PRIA" | "WANITA" | "UNISEX";
  imageUrl: string | null;
  imagePublicId: string | null;
  createdAt: string;
  updatedAt: string;

  variants: ProductVariant[];
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
  };
}

export interface CartItem {
  id: string;
  cartId: string;
  variantId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productVariant: ProductVariant & {
    product: Product;
  };
}

export interface Cart {
  id: string;
  userId: string;
  cartItems: CartItem[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  variantId: string;
  quantity: number;
  price: number;
  createdAt: string;
  productVariant: ProductVariant & {
    product: Product;
  };
}

export interface Order {
  id: string;
  userId: string;
  status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  totalPrice: number;
  shippingAddress: string;
  trackingNumber: string | null;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
  user?: {
    name: string;
    email: string;
  };
}

export interface Notification {
  id: string;
  userId: string;
  orderId: string;
  message: string;
  status: "READ" | "UNREAD";
  createdAt: string;
}
