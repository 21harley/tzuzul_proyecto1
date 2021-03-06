import React, { useContext, useState } from "react";
import { useParams ,Navigate,Link } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";
import { userContext } from "../context/UserContext";

import "./../css/nav.css";


function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [pelicula,setPelicula]=useState("");
  const [isBusqueda,setIsBusqueda]=useState(false);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);



  const { toggleThemeChange,theme  } = useContext(themeContext);
  const {setUser,user}= useContext(userContext)

 const changeValor=(e)=> setPelicula(e.target.value);

 const cangeKeyDown=(e)=>{
  if(e.key==="Enter") setIsBusqueda(!isBusqueda);
 }

 const cerrarSeccion=()=>{
   setUser({logged:false});
 }
  
 if(isBusqueda) return <Navigate to={"/resultados/"+pelicula}/>;

  return (
    <div>
      <nav
        className={
          active === "nav__menu"
            ? navbar
              ? "nav active"
              : "nav"
            : "nav active"
        }
      >
        <Link to={"/"}>
          <div className="logo"></div>
        </Link>

        <ul className={active}>
          {/*
                    <p>{user.logged?"Bienvenido "+user.name:"Desconectado"}</p>
          */}
          <li className="nav__item">
              <div className="margin__buscar__movie active__input__buscar">
                <div><input className="input__buscar active__input__buscar" 
                      placeholder="Buscar pelicula..." type="text" name="nombre"
                       onChange={(e)=>{changeValor(e)}} 
                       onKeyDown={(e)=>{cangeKeyDown(e)}}/>
                       </div>
                       <div className="boton__buscar" >
                       </div>
              </div>
          </li>
          <li className="nav__item">
            <Link to={"/"} className="nav__link">
              Inicio
            </Link>
          </li>
          {/*
                   <li className="nav__item">
            <a href="#" className="nav__link">
              Genero
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Peliculas
            </a>
          </li>
          */}
          <li className="nav__item">
            <div className={"margin__btnanimated "+((theme)?"active__cambio":"")}>
              <button
                className={"btnanimated "+((theme)?" active__luna":"")}
                onClick={() => {
                  toggleThemeChange();
                }}
              >
              </button>
            </div>
          </li>
          {(user.logged)
            ?<li className="nav__item">User{user.name}</li>
            :<>
              <li className="nav__item">
                <button className="nav__link nav__button--registro">
                  <Link to={"/registro"} className="nav__link--registro">
                    Registro
                  </Link>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__button--entrar">
                  <Link to={"/login"} className="nav__link nav__button--entrar">
                   Entrar
                  </Link>
                </button>
            </li>
            </>
          }
          {(user.logged)
            ?<>
            <li className="nav__item">
              <button className="nav__link nav__button--registro" onClick={()=>{cerrarSeccion()}}>
                Cerrar
              </button>
            </li>
          </>:""
          }
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import "./../css/nav.css";

// const SEARCH_API =
//   "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");

//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };
//   window.addEventListener("scroll", changeBackground);

//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     if (searchTerm) {
//       getMovies(SEARCH_API + searchTerm);

//       searchTerm("");
//     }
//   };

//   const handleOnChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <nav className={navbar ? "nav active" : "nav"}>
//       <div className="logo"></div>

//       <ul className="nav__menu">
//         <form onSubmit={handleOnSubmit}>
//           <input
//             className="search"
//             type="search"
//             placeholder="Buscar...."
//             value={searchTerm}
//             onChange={handleOnChange}
//           />
//         </form>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Inicio
//           </a>
//         </li>
//         <li className="nav__item">
//           <button className="nav__link">Genero</button>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Peliculas
//           </a>
//         </li>
//         <li className="nav__item">
//           <button href="#" className="nav__link">
//             Registro
//           </button>
//         </li>
//         <li className="nav__item">
//           <button href="#" className="nav__link">
//             Entrar
//           </button>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }
