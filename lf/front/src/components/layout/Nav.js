import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/QuienesSomos">QuienesSomos</Link></li>
                    <li><Link to="/Servicios">Servicios</Link></li>
                    <li><Link to="/Obras">Obras</Link></li>
                    <li><Link to="/Galeria">Galeria</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>  
            </div>
        </nav>
    )
}

export default Nav;
