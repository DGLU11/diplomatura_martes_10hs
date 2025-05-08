import "./../styles/obras.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";

const Obras = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/api/novedades'); 

      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <div>
      <main className="holder">
        <h2>Obras</h2>
        {loading ? (
          <p>Cargando novedades...</p>
        ) : (
          novedades.map((item) => (
            <NovedadItem
              key={item.id}
              nombredelaobra={item.nombredelaobra}
              descripcion={item.descripcion}
              lugar={item.lugar}
              fechadeinicio={item.fechadeinicio}
              tipodeobra={item.tipodeobra}
              estado={item.estado}
              imagen={item.imagen}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Obras;
