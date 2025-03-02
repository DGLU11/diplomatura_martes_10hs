import "./../styles/home.css";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="imagespublic/img/home/home1.jpg" alt="Imagen de home" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>
                        <strong>En LF ESTUDIO</strong> diseñamos, dirigimos y construimos tu sueño.
                        Sabemos que cada detalle cuenta, y estamos listos para convertir tu visión en realidad con un
                        enfoque personalizado y resultados excepcionales.
                        No postergues más la construcción de tu futuro.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
