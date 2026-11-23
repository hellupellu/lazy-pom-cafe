import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Shop, Cart, Login, Register ja Admin sisältää väliaikaista tekstiä.
// Ne korvataan myöhemmin oikeilla komponenteilla.
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<h1>Shop</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/admin" element={<h1>Admin</h1>} />
      </Routes>
    </>
  );
}

export default App;
