import "../assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";

function App() {
  return (
    <BrowserRouter>
    <AppContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="/producto" element={<Producto />}></Route>
        </Routes>
      </Layout>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
