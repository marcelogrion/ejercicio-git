import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTAR COMPONENTES A RUTEAR

import Peliculas from './components/Peliculas';
import MiComponente from './components/MiComponente';
import SeccionPruebas from './components/SeccionPruebas';
import Error from './components/Error';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                {/*   CONFIGURAR RUTAS Y PAGINAS*/}
                <Switch>

                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />

                    <Route exact path="/pagina-1" render={() => (
                        <h1>Hola mundo desde la ruta PAGINA 1</h1>
                    )} />

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h1 className="subheader">Pagina de pruebas</h1>
                                <h2>
                                    {nombre && !apellidos &&
                                        <h3>{nombre}</h3>
                                    }
                                    {nombre && apellidos &&
                                        <h3>{nombre} {apellidos}</h3>
                                    }
                                </h2>
                            </div>
                        );
                    }
                    } />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;