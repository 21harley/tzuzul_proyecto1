import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import './../css/login.css';

export default function Registro(){

    return(
       <div>
           <Navbar/>
              <div className="margin-form-registro">
              <form className="form-registro">
                <h1>Registro</h1>
                    <input className="input-registro " type="text" placeholder="Nombre" required/>
                    <input className="input-registro " type="text" placeholder="Apellido" required/>
                    <input  className="input-registro" type="email" placeholder="Correo" required/>
                    <input className="input-registro password" type="password" placeholder="Clave" required/>
                    <button className="btn-registro-submit">Registrar</button>
                </form>
              </div>
           <Footer/>
       </div>
    );
}