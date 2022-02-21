import React, {useContext} from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { themeContext } from "../context/ThemeContext";
import { useParams ,Navigate,Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import './../css/login.css';

export default function Login(){
   const { theme } = useContext(themeContext);

   const {setUser,user}= useContext(userContext)

   const iniciarSesion=(event)=>{
      event.preventDefault()
      const {email, password} = event.target

      fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login", {
         method:"POST",
         credentials: 'include',
         headers:{
               "content-Type":"application/json"
         },
         body:JSON.stringify({
            email:email.value,
            password:password.value
         })
      }).then(res=>res.json())
      .then(user=>{
         console.log(user)
         setUser({logged:true,name:user.data.firstName})
      }).catch(error=>setUser({logged:false}))
   }
   if(user.logged==true) return <Navigate to={"/"}/>;
    return(
       <div className={theme ? "main__dark" : "main__light"}>
           <Navbar/>
              <div className="margin-form-login">
              <form className="form-login" onSubmit={iniciarSesion}>
                <h1>Login</h1>
                   <div className="margin-input-logo">
                      <div className="login-logo-user"></div><input  className="input-login" type="email" name="email" placeholder="Correo" required/>
                   </div>
                   <div className="margin-input-logo">
                     <div className="login-logo-key"></div><input className="input-login password" type="password" name="password" placeholder="Clave" required/>
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