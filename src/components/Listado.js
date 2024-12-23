import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        console.log("componente de listado de peliculas cargado!!")
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {

        let peliculas = JSON.parse(localStorage.getItem("peli"));
        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        //Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar esas peliculas para que elimine del array lo que no quiero
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //Actualizar estado del listado para que se vea en la pantalla
        setListadoState(nuevo_array_peliculas);

        //Actualizar los datos en el LocalStorage
        localStorage.setItem('peli', JSON.stringify(nuevo_array_peliculas))
    }

    return (
        <>
            {listadoState != null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit">Editar</button>
                            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>
                        </article>
                    );
                })
                : <h2>No hay pelicula para mostrar</h2>
            }

        </>
    )
}
