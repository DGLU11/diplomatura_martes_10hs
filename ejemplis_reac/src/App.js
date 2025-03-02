import {
  EjemploProps01,
  EjemploProps02,
  EjemploProps03,
  EjemploProps04,
  EjemploProps05
} from './components/props';

import {
  EjemploEstado01
} from './components/estado';

const nombre2 = "Pedro";

const listapaises = ['Italia', 'Belgica', 'España', 'Grecia'];
const listaciudades = ['Roma', 'Bruselas', 'Barcelona', 'Atenas'];

const mostrarValor = valor => {
  console.log(valor);
};

function App() {
  return (
    <div>
      <h1>Props</h1>
      {/* propiedad simple y reutilizacion */}
      <EjemploProps01 nombre="Lourdes"/>
      <EjemploProps01 nombre="Pedro" />
      <hr />
      {/* pasar referecia a variable como prop */}
      <EjemploProps02 elementos={listapaises} />
      <EjemploProps02 elementos={listaciudades} />
      <hr />
      {/* multiples props y destructuring */}
      <EjemploProps03 titulo="Arquitecta" texto="Maria Juana Fernandez" breve resumen="Egresada de la Universidad de Buenos Aires FADU" />
      <hr />
      {/* pasar una funcion */}
      <EjemploProps04 cambiaValor={mostrarValor} />


      {/* este da error cuando escribimos porque no recibe el manejador */}
      <EjemploProps04 />

      {/*qwqw*/}
      <EjemploProps05 eventoClick={mostrarValor} />

     
      {/* este no da error proque le pusimos la "validacion" de la prop */}
      <EjemploProps05 />
      <h1>Estado</h1>
      <EjemploEstado01 />
    </div>
  );
}

export default App;
