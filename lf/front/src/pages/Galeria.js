import "./../styles/galeria.css";

const Galeria = (props) => {
    return (
        <div>
            <h1>Galería</h1>
            <main className="galeria">
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img1.jpg" alt="Imagen 1" />
                        <h3>Living marítimo</h3>
                        <p>Diseño minimalista con grandes ventanales.</p>
                    </div>
                </div>
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img2.jpg" alt="Imagen 2" />
                        <h3>Baño Industrial</h3>
                        <p>Combinación de hierro y hormigón.</p>
                    </div>
                </div>
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img3.jpg" alt="Imagen 3" />
                        <h3>Cocina Carrara</h3>
                        <p>Madera y mármol cálido para un ambiente de aromas.</p>
                    </div>
                </div>
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img4.jpg" alt="Imagen 4" />
                        <h3>Baño minimalista</h3>
                        <p>Integración con la naturaleza y diseño limpio.</p>
                    </div>
                </div>
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img5.jpg" alt="Imagen 5" />
                        <h3>Descanso en blancos</h3>
                        <p>Integración de lo sutil y simple.</p>
                    </div>
                </div>
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img6.jpg" alt="Imagen 6" />
                        <h3>Cocina limpia</h3>
                        <p>Elementos limpios en lo diario.</p>
                    </div>
                </div>
                <div className="imagen">
                    <div className="item">
                        <img src="img/galeria/img7.jpg" alt="Imagen 7" />
                        <h3>Luz natural</h3>
                        <p>Comedor integrado con grandes ventanales.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Galeria;
