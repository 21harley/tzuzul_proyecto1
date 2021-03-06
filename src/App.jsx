
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalles from "./pages/Detalles"
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Resultados from "./pages/Resultados";
function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Registro" element={ <Registrar/> } />
          <Route path="/details/:id" element={<Detalles/>}/>
          <Route path="/resultados/:id" element={<Resultados/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;