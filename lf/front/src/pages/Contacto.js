import "./../styles/contacto.css";
import { useState } from 'react';
import axios from 'axios';


const Contacto = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        lugar: '',
        mensaje: ''
    };

    const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);

const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]: value
    }));
};
    
const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await
         axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }
    
    return (
        <div>
            <h1>Contacto</h1>
            <main className="holder contacto">
                <div>
                    <h2>Contacto</h2>
                    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        
                        <p>
                            <label for="nombre">Nombre y Apellido</label>
                            <input type="text" name="nombre" value= {formData.nombre} onChange={handleChange}/>
                        </p>
                        
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="email" value= {formData.email} onChange={handleChange}/>
                        </p>
                        
                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        
                        <p>
                            <label for="lugar">Lugar de la Obra</label>
                            <input type="text" name="lugar" value={formData.lugar} onChange={handleChange} />

                        </p>
                        
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje" value= {formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>

                   {sending ?  <p>Enviando...</p> : null}
                   {msg ?  <p>{msg}</p> : null}
                </div>
            </main>
        </div>
    )
}

export default Contacto;
