import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./pages/list/List";
import { Product } from "./pages/product/Product";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
