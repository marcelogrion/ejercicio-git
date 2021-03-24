import React, { Component } from 'react';

class Pelicula extends Component {


    marcar = () => {

        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    }

    render() {
        //AL CREAR ESTA FORMA, QUE SE LLAMA DESTRUCTURING, ME EVITO ESCRIBIR "PELICULA"ABAJO
        //ES UNA FORMA DE DEFINIR LAS VARIABLES
        const { titulo, imagen } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    {/*ACA ME EVITO USAR "PELICULA*/}
                    <img src={imagen} alt={titulo} />
                </div>

                <h2>{titulo}</h2>

                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>

                <button onClick={this.marcar}>
                    marcar favorita
                </button>

                <div className="clearfix"></div>
            </article>
        )
    }
}
export default Pelicula;