import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTAR COMPONENTES A RUTEAR
import Peliculas from './componentes/Peliculas';
import SeccionPruebas from './componentes/SeccionPruebas';
import MiComponente from './componentes/MiComponente';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                {/*   CONFIGURAR RUTAS Y PAGINAS*/}
                <switch>
                
                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />
                
                </switch>
            </BrowserRouter>
        );
    }
}

export default Router;