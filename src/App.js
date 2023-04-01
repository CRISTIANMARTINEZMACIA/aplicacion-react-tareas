import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
