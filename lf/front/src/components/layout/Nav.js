import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "activo" : undefined)}>Home</NavLink></li>
                    <li><NavLink to="/quienes-somos" className={({ isActive }) => (isActive ? "activo" : undefined)}>Quienes Somos</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive }) => (isActive ? "activo" : undefined)}>Servicios</NavLink></li>
                    <li><NavLink to="/obras" className={({ isActive }) => (isActive ? "activo" : undefined)}>Obras</NavLink></li>
                    <li><NavLink to="/galeria" className={({ isActive }) => (isActive ? "activo" : undefined)}>Galería</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => (isActive ? "activo" : undefined)}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;


