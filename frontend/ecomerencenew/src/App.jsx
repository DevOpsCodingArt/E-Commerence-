import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import ProductListing from "./Components/Pages/ProductsPage/PaductListing";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductsDetails from "./Components/Pages/ProductsDetails/ProductsDetails";
import Login from "./Components/Pages/Auth/Login";
import Register from "./Components/Pages/Auth/Register";
import CartPage from "./Components/Pages/Cart/CartPage";
import OTPVerify from "./Components/Pages/Auth/OTPVerify";
import ResetPassword from "./Components/Pages/Auth/ResetPassword";
import CheckOutPage from "./Components/Pages/CheckOut/CheckOutPage";
import AccountPage from "./Components/Pages/Account/AccountPage";
import AdminHome from "./Components/Pages/Admin/AdminHome";
import AdminHeader from "./Components/Admin/AdminHeader";
import AdminSideBar from "./Components/Admin/AdminSideBar";

// Layout Components
function UserLayout() {
  return (
    <div className="font-Montserrat">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
      {/* Sidebar (left, full height) */}
      <div className="z-50 row-span-2">
        <AdminSideBar />
      </div>

      {/* Header (top, spans right columns) */}
      <div>
        <AdminHeader />
      </div>

      {/* Main content */}
      <div className="overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes with Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product-listing" element={<ProductListing />} />
          <Route path="products-details/:id" element={<ProductsDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="verify" element={<OTPVerify />} />
          <Route path="forgot-password" element={<ResetPassword />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>

        {/* Admin Routes with Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          {/* Add more admin routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
