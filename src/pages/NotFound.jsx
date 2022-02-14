import "./../css/NotFound.css";
import Nav from "../components/Navbar";
import Footer from "../components/footer";

export default function NotFound() {
    return(
       <>
       <Nav></Nav>
       <div className="center-NotFound">
            <div className="NotFound"></div>
       </div>
       <Footer></Footer>
       </>
    );
}