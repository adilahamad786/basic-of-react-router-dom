import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>The home page.</h1>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
