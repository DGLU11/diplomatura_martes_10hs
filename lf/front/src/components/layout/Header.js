import Nav from "./Nav";

const Header = (props) => {
    return (
        <>
            <header>
                <div className="holder">
                    <img 
                        src="img/public/img/logolfr-01.png"  width="100" alt="estudioLF" 
                    />
                    <h2>Estudio de arquitectura</h2>
                    <p>
                        El header o cabecera es la parte superior de las páginas web de un sitio. En este se colocan los elementos más importantes de la navegación, como el menú principal; y los de la marca en sí, como el logo, los iconos de las redes sociales, etc.
                    </p>
                </div>
            </header>
        </>
    );
}

export default Header;
