import React, { useEffect, useState } from 'react'

export const Listado = () => {

    const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        console.log("componente de listado de peliculas cargado!!")
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {

        let peliculas = JSON.parse(localStorage.getItem("peli"));
        setListadoState(peliculas);
    }

    return (
        <>
            {listadoState != null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">Desarrollo Web</h3>
                            <p className="description">Master web</p>

                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    );
                })
                : <h2>No hay pelicula para mostrar</h2>
            }

        </>
    )
}
