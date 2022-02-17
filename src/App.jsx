
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalles from "./pages/Detalles"
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/details/:id" element={<Detalles/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;