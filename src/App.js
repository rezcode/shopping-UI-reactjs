import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WithNavbar from "./components/Layout/WithNavbar";
import WithoutNavbar from "./components/Layout/WithoutNavbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import MyBag from "./pages/MyBag/MyBag";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/my-bag" element={<MyBag />} />
        </Route>
        <Route element={<WithoutNavbar />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
