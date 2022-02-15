
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalles from "./pages/Detalles"
import NotFound from "./pages/NotFound";

function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/details/:id" element={<Detalles/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;