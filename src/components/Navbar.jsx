import React from "react";
import "./../css/nav.css";
import Hamburger from "./Hamburger";

export default function Navbar() {
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const toggleHamburger = () => {
  //   setHamburgerOpen(!hamburgerOpen);
  // };

  return (
    <div>
      <div className="navigation">
        <ul>
          <li>Inicio</li>
          <li>Genero</li>
          <li>Peliculas</li>
          <button className="btn">Registro</button>
        </ul>
        <div className="hamburger">
          <Hamburger />
        </div>
      </div>

      {/* <style jsx>{`

        .navigation ul{
          display: ${hamburgerOpen ? 'inline' : 'none'};
          background-color: blue;
          height: 100vh;
          width: 50vw;
          margin-top: 50px;
          position: absolute;
        }
      
      
      `}</style> */}
    </div>
  );
}
