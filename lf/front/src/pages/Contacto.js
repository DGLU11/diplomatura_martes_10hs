
const Contacto = (props) => {
    return (
        <div>
            <h1>Contacto</h1>
            <main className="holder contacto">
                <div>
                    <h2>Contacto</h2>
                    <form action="procesar_formulario.php" method="POST" className="formulario">
                        
                        <p>
                            <label for="nombre">Nombre y Apellido</label>
                            <input type="text" />
                        </p>
                        
                        <p>
                            <label for="email">Email</label>
                            <input type="text" />
                        </p>
                        
                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" />
                        </p>
                        
                        <p>
                            <label for="lugar">Lugar de la Obra</label>
                            <input type="text" />
                        </p>
                        
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea></textarea>
                        </p>
                        
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Contacto;
