import Encabezado from './encabezado';
import Contenido from './contenido';
import Footer from './PieDePagina';
import { Link } from 'react-router-dom';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://www.cumlingus.com/wp-content/uploads/2023/08/s-l1600.jpg',
  imageSize: 250,
};


function Main() {
  return (
    <>
        <Encabezado/>
        <Contenido 
         saludo={'Hola mundo'}
         contenido={'El contenido de la pagina'} 
         usuario={user}
    /> 
    <h1>Lista de componentes navegables</h1>
    <ul>
        <li><Link to="/">Inicio</Link></li> 
        <li><Link to="/input">Ejemplo Input</Link></li> 
        <li><Link to="/modal">Ejemplo de modal</Link></li> 
    </ul>
    <Footer></Footer>
    </>
  );
}

export default Main;
