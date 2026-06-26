import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, LogOut, User } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useAuth } from "@/hooks/useAuth";
import useCartStore from "@/store/cartStore";

const Navbar = () => {
  const { userData, logoutMutation } = useAuth();
  const { totalItems } = useCartStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => navigate("/login"),
    });
  };

  return (
    <div className="border-b px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to={"/"} className="font-bold text-xl">
        Luxury Perfume
      </Link>

      {/* Nav Link */}
      <div className="flex items-center gap-6">
        <Link to={"/"} className="text-sm hover:underline">
          Home
        </Link>
        <Link to={"/products"} className="text-sm hover:underline">
          Products
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link to="/cart" className="relative inline-flex items-center">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center p-0 text-xs rounded-full">
              {totalItems}
            </Badge>
          )}
        </Link>

        {userData?.data ? (
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">{userData.data.name}</span>
            <Button variant={"ghost"} size={"sm"} onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button size={"sm"}>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
