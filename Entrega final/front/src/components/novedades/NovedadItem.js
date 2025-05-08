
import React from 'react';
import "../../styles/obras.css";

const NovedadItem = (props) => {
    const { nombredelaobra, descripcion, lugar, fechadeinicio, tipodeobra, estado, imagen } = props;

    return (
        <div className="novedad-item">
            <h2>{nombredelaobra}</h2>
            <img src={imagen} alt={nombredelaobra} className="novedad-img" />
            <div className="novedad-datos">
                <p><strong>Descripción:</strong> {descripcion}</p>
                <p><strong>Lugar:</strong> {lugar}</p>
                <p><strong>Fecha de inicio:</strong> {fechadeinicio}</p>
                <p><strong>Tipo de obra:</strong> {tipodeobra}</p>
                <p><strong>Estado:</strong> {estado}</p>
            </div>
        </div>
    );
};

export default NovedadItem;
