import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/shared/ProtectedRoute";

// Pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/shared/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import GuestRoute from "./components/shared/GuestRoute";
import ProductPage from "./pages/product/ProductPage";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6">{children}</main>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          }
        />

        {/* Notfound Route */}
        <Route path="/not-found" element={<NotFoundPage />} />

        {/* Product */}
        <Route path="/products" element={
           <ProtectedRoute>  
              <Layout>
                <ProductPage />
              </Layout>
            </ProtectedRoute>
        }/>

        {/* Protected Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>  
              <Layout>
                <HomePage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Redirect ke Notfound kalau route tidak ditemukan */}
        <Route path="*" element={<Navigate to={"/not-found"} replace />} />
      </Routes>
    </>
  );
};

export default App;
