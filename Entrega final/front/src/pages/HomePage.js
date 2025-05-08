import "./../styles/home.css";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/home1.jpg" alt="Imagen de home" />
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

            <section className="testimonios">
                <h2>Testimonios</h2>
                <span className="cita"></span>
                <strong>
                    "Nosotros los contratamos para realizar la casa de nuestros sueños, se encargaron del antes,
                    durante y después de la obra."
                </strong>
                <p>Pedro Lorenzo Coscia, cliente.</p>
            </section>
        </main>
    );
}

export default HomePage;
