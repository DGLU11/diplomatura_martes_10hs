import "./../styles/servicios.css";

const Servicios = (props) => {
    return (
        <div>
            <h1>Servicios</h1>
            <main className="holder">
                <h2>Servicios</h2>

                <div className="servicio">
                    <img src="public/img/servicios/servicio1.jpg" alt="vidrio" />
                    <div className="info">
                        <h4>Concepto en vidrio</h4>
                        <p>La Glass House, o Casa de Vidrio, diseñada por Philip Johnson para su tesis en la Universidad de Harvard, es una de las precursoras del estilo moderno y del uso de nuevos materiales. Johnson se inspiró en la frase de Mies Van der Rohe «less is more» (menos es más), logrando simplicidad y claridad en la obra.</p>
                    </div>
                </div>

                <div className="servicio">
                    <img src="public/img/servicios/servicio2.jpg" alt="hierro" />
                    <div className="info">
                        <h4>Hierro</h4>
                        <p>El oro, la plata y el cobre se encuentran en la naturaleza en estado nativo, pero fue durante el Calcolítico y la Edad del Bronce que los humanos aprendieron a fusionar, remachar y forjar metales como el cobre y el bronce. Esto llevó al desarrollo de estructuras metálicas más resistentes en la arquitectura moderna.</p>
                    </div>
                </div>

                <div className="servicio">
                    <img src="public/img/servicios/servicio3.jpg" alt="madera" />
                    <div className="info">
                        <h4>Madera</h4>
                        <p>La carpintería de madera a medida permite crear elementos únicos y personalizados, adaptados a las dimensiones y necesidades específicas de cada espacio. Desde puertas y armarios hasta cocinas y vestidores, la madera mejora la funcionalidad y la estética del hogar.</p>
                    </div>
                </div>

                <div className="servicio">
                    <img src="public/img/servicios/servicio4.jpg" alt="material" />
                    <div className="info">
                        <h4>Material en bruto</h4>
                        <p>La arquitectura brutalista surgió en la década de 1950 en el Reino Unido, destacándose por su uso de materiales expuestos y estructuras minimalistas. Este estilo se caracteriza por construcciones que priorizan la funcionalidad sobre la ornamentación, utilizando hormigón crudo y geometrías imponentes.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Servicios;
