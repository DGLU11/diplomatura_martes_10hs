import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">QuienesSomos</Link></li>
                    <li><Link to="/">Servicios</Link></li>
                    <li><Link to="/">Obras</Link></li>
                    <li><Link to="/">Galeria</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul>  
            </div>
        </nav>
    )
}

export default Nav;
