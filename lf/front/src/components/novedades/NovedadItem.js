import React from 'react';

const NovedadItem = (props) => {
    const {nombredelaobra, descripcion,lugar, fechadeinicio, tipodeobra, estado, imagen} =props
    return (
        <div className="novedades">
            <h2>{nombredelaobra}</h2>
       <h1>{descripcion}</h1>
       <h1>{lugar}</h1>
       <h1>{fechadeinicio}</h1>
       <h1>{tipodeobra}</h1>
       <h1>{estado}</h1>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
    );
}
nombredelaobra, fechadeinicio, lugar, descripcion, imagen

export default NovedadItem;