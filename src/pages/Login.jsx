import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import './../css/login.css';

export default function Login(){

    return(
       <div>
           <Navbar/>
              <div className="margin-form-login">
              <form className="form-login">
                <h1>Login</h1>
                   <div className="margin-input-logo">
                      <div className="login-logo-user"></div><input  className="input-login" type="email" placeholder="Correo" required/>
                   </div>
                   <div className="margin-input-logo">
                     <div className="login-logo-key"></div><input className="input-login password" type="password" placeholder="Clave" required/>
                   </div>
                   <div className="margin-input-logo">
                       <div></div><button className="btn-login-submit">Ingresar</button>
                   </div>
                </form>
              </div>
           <Footer/>
       </div>
    );
}