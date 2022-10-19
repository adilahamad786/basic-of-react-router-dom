import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <main>
        <MainHeader />
        <Routes>
          <Route path="/" element={<h1>The home page.</h1>} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
