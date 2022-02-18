import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./../css/nav.css";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      searchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className={ (active === "nav__menu")?((navbar )? "nav active" : "nav"):"nav active"}>
      

      <Link to={"/"}>
      <div className="logo"></div>
      </Link>

      <ul className={active}>
      <li className="nav__item">
      <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Buscar...."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </li>
        <li className="nav__item">
        <Link to={"/"} className="nav__link">
          Inicio
        </Link>
        </li>
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
        <li className="nav__item">
          <button href="#" className="nav__link nav__button--registro">
            Registro
          </button>
        </li>
        <li className="nav__item">
          <button href="#" className="nav__link nav__button--entrar">
            Entrar
          </button>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
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
