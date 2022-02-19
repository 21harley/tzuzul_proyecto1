import react , {useContext} from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { themeContext } from "../context/ThemeContext";
import { userContext } from "../context/UserContext";
import './../css/login.css';

export default function Registro(){
    const { theme } = useContext(themeContext);

    const {setUser}= useContext(userContext)

   const registroUsuario =(event)=>{
      event.preventDefault()
      const {name, lastName ,email, password} = event.target

      fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/signup", {
         method:"POST",
         credentials: 'include',
         headers:{
               "content-Type":"application/json"
         },
         body:JSON.stringify({
            name:name.value,
            lastName:lastName.value,
            email:email.value,
            password:password.value
         })
      }).then(res=>res.json())
      .then(user=>{
         console.log(user)
         setUser({logged:true,name:user.data.firstName})
      }).catch(error=>setUser({logged:false}))
   }

    return(
       <div className={theme ? "main__dark" : "main__light"}>
           <Navbar/>
              <div className="margin-form-registro">
              <form onSubmit={registroUsuario} className="form-registro">
                <h1>Registro</h1>
                    <input className="input-registro " type="text" name="name" placeholder="Nombre" required/>
                    <input className="input-registro " type="text" name="lastName" placeholder="Apellido" required/>
                    <input  className="input-registro" type="email" name="email" placeholder="Correo" required/>
                    <input className="input-registro password" type="password" name="password" placeholder="Clave" required/>
                    <button className="btn-registro-submit">Registrar</button>
                </form>
              </div>
           <Footer/>
       </div>
    );
}