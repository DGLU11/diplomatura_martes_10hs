import "./../styles/quienessomos.css";

const QuienesSomos = (props) => {
    return (
        <div>
            <h1>Quienes Somos</h1> 
            <main className="holder">
                <div className="nuestra-historia">
                    <h2>Nuestra historia</h2>
                    <p>
                        Con más de una década en el ámbito de la arquitectura y construcción, LF Estudio ha consolidado su
                        presencia con 16 proyectos y obras realizadas.
                        En cada proyecto, no solo estamos creando estructuras, sino también relaciones duraderas.
                    </p>
                    <p>
                        Nos comprometemos a comprender las necesidades individuales de cada cliente, colaborando estrechamente
                        para transformar sus visiones en una realidad tangible. La transparencia, la comunicación abierta y el
                        respeto mutuo son los cimientos sobre los cuales construimos no solo edificaciones, sino asociaciones significativas.
                    </p>
                    <p>
                        Nos enfocamos en la zona de Villa del Parque y Villa Devoto de la Ciudad Autónoma de Buenos Aires.
                        posicionándonos como referentes en la creación de viviendas que se distinguen por su calidad en los insumos utilizados y un enfoque contemporáneo que
                        busca satisfacer las necesidades del público que valora la excelencia en diseño y construcción.
                    </p>
                </div>

                <div className="staff">
                    <h2>Staff</h2>
                    <div className="personas">
                
                        <div className="persona">
                            <img src="img/nosotros/nosotros1.jpg" alt="Ana Rubio" />
                            <h4>Ana Rubio</h4>
                            <h5>Arquitecta</h5>
                            <p>Actual directora de LF Estudio. Egresada de la Universidad de Buenos Aires en el año 1979. Su
                                pasión hacia la arquitectura se inició desde su infancia. En el año 2010 fundó el estudio, un espacio donde sus habilidades y
                                visiones convergen para crear proyectos arquitectónicos únicos.</p>
                        </div>

                       
                        <div className="persona">
                            <img src="img/nosotros/nosotros2.jpg" alt="Juana Fernandez" />
                            <h4>Juana Fernandez</h4>
                            <h5>Arquitecta</h5>
                            <p>Actual directora de LF Estudio. Egresada de la Universidad de Buenos Aires en el año 1979. Su
                                pasión hacia la arquitectura se inició desde su infancia. En el año 2010 fundó el estudio, un espacio donde sus habilidades y
                                visiones convergen para crear proyectos arquitectónicos únicos.</p>
                        </div>

                        
                        <div className="persona">
                            <img src="img/nosotros/nosotros3.jpg" alt="Francesca Artese" />
                            <h4>Francesca Artese</h4>
                            <h5>Diseñadora</h5>
                            <p>Actual directora de LF Estudio. Egresada de la Universidad de Buenos Aires en el año 1979. Su
                                pasión hacia la arquitectura se inició desde su infancia. En el año 2010 fundó el estudio, un espacio donde sus habilidades y
                                visiones convergen para crear proyectos arquitectónicos únicos.</p>
                        </div>

                       
                        <div className="persona">
                            <img src="img/nosotros/nosotros1.jpg" alt="Ana Coscia" />
                            <h4>Ana Coscia</h4>
                            <h5>Ing. Civil</h5>
                            <p>Actual director de LF Estudio. Egresado de la Universidad de Buenos Aires, su pasión por la ingeniería civil lo llevó a
                                fundar el estudio y a liderar proyectos de gran escala en el campo de la construcción.</p>
                        </div>

                       
                        <div className="persona">
                            <img src="img/nosotros/nosotros3.jpg" alt="Renata Fernandez" />
                            <h4>Renata Fernandez</h4>
                            <h5>Ing. Civil</h5>
                            <p>Actual directora de LF Estudio. Egresada de la Universidad de Buenos Aires en el año 1985. Su enfoque en la ingeniería civil le
                                permite contribuir significativamente al diseño y ejecución de proyectos arquitectónicos de alto nivel.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default QuienesSomos;
