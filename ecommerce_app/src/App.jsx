import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products/:category" element={<ProductList />}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/success" element={<Success />}></Route>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      ></Route>
      <Route
        path="/register"
        element={user ? <Navigate to="/" replace /> : <Register />}
      ></Route>
    </Routes>
  );
}

export default App;
