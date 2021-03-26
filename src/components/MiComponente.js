import React, { Component } from 'react';


class MiComponente extends Component {

    render() {
        var receta = {
            nombre: 'pizza',
            ingrediente: ['tomate', 'queso', 'harina', 'aceite'],
            calorias: 400
        }
        return (
            <div className="mi-componente">
                
                <h1>{receta.nombre}</h1>
                <h1>{receta.calorias}</h1>
                <ol>
                    {
                        receta.ingrediente.map((ingrediente, i) => {
                            return (
                                <li key={i}>

                                    {ingrediente}

                                </li>
                            );
                        }
                        )
                    }
                </ol>
                <hr />
            </div>
        );
    }
}

export default MiComponente;