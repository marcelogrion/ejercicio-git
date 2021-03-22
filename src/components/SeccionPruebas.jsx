import React, { Component } from 'react';

//importo componente
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    //establezco una propiedad
    contador = 0;
    /*
    ESTO ANDA PERO NO SE USA
        constructor(props) {
            super(props);
            this.state = {
                contador: 0
            }
        }
        EN VEZ USAMOS ESTO
    */

    state = {
        contador: 0
    }

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>hola soy {nombre}</h2>
                <h2>tengo {edad}</h2>
            </div>
        );
        return presentacion;
    }

    sumar =(e) => {
                // FORMAS ALTERNATIVAS, NO TODAS ANDAN
        // this.contador++;
        // this.contador = this.contador +1;
        // this.state.contador =  this.state.contador +1;
        this.setState({
            contador: (this.state.contador + 1)
        })
    }
    restar = (e) => {
    // restar(e) { ////SI SE COLOCA COMO METODO, Y NO COMO FUNCION, HAY QUE BINDEAR LA OPERACION EN LA PAGINA
        // FORMAS ALTERNATIVAS, NO TODAS ANDAN
        // this.contador--;
        // this.contador = this.contador -1;
        // this.state.contador =  this.state.contador -1;
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {

        var nombre = 'marcelo';
        var edad = 23;
        return (

            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola bienvenidos al mundo de pepe
                    </p>
                <h2 className="subheader">Funciones y JSX basico</h2>

                { this.HolaMundo(nombre, edad)}

                <h2 className="subheader">Componentes</h2>

                <section className="componentes">

                    <MiComponente />

                    <MiComponente />

                </section>

                <h2 className="subheader">Estado</h2>

                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="restar" onClick={this.restar/*.bind(this)*/} />
                    <input type="button" value="sumar" onClick={this.sumar/*.bind(this)*/} />

                </p>

            </section>
        );
    }
}


export default SeccionPruebas;