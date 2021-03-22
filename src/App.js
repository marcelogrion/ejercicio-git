
import './assets/css/App.css';
/*
import { Divider } from '@material-ui/core';
import { EditLocationRounded } from '@material-ui/icons';
*/
//import components


import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';


function App() {
  let buttonSting = 'Ir al blog'
  return (

    <div className="App">
      <Header />
      <Slider
        title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
        btn={buttonSting}
      />

      <div className="center">

        <Peliculas />
        <SeccionPruebas />
        <Sidebar />

      </div>{/*end div center*/}
      <div class="clearfix"></div>

      <Footer />
    </div>
  );
}

export default App;
