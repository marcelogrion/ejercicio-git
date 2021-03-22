import React, { Component } from 'react';

//ipmorto componente
import Pelicula from './Pelicula';


class Peliculas extends Component {
    //defino mi state y le defino mi objeto

    state = {
        peliculas: [
            { titulo: 'Batman vs superman', imagen: 'https://brandholics.es/wp-content/uploads/2016/03/58efa775a3e07e08040ed3845d58d2ec.jpg' },
            { titulo: 'Gran Torino', imagen: 'http://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/67/90/93/19022596.jpg' },
            { titulo: 'Looper', imagen: 'https://i0.wp.com/moviefail.com/wp-content/uploads/2012/10/looper1.jpeg?fit=4000%2C3000&ssl=1' }
        ],
        nombre: 'Victor Robles',
        favorita: {}
        
    }

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        var random = Math.floor(Math.random() * 3);

        peliculas[random].titulo = "baywach";
        this.setState({
            peliculas: peliculas

        });
    }
    favorita = (pelicula) => {
        console.log('favorita Marcada');
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })

    }
    render() {
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">PELICULAS</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        cambiar titulo de batman
                </button>
                </p>
                <p>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
                {/*Crear componente pelicula*/}

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas