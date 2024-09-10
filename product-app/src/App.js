import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./pages/list/List";
import { Product } from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
