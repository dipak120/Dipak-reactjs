import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import AddProduct from "./components/AddProduct"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center mt-10">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/produ-detail/:id" element={<ProductDetail/>} />
          <Route path="/produ-add" element={<AddProduct/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
