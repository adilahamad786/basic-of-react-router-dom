import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
// import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Welcome from "./pages/Welcome";
import About from "./pages/About";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="welcome/new-user" />} />
          <Route path="/welcome" element={<Welcome />} >
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
