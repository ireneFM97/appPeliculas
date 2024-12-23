import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {

    const titulo = "Añadir pelicula";
    const [pelicula, setPelicula] = useState({
        titulo: "",
        descripcion: ""
    });

    const conseguirDatosForm = (e) => {
        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Guardar estado
        setPelicula(pelicula);

        //Actualiar el estado

        setListadoState(elementos => {
            return [...elementos, pelicula];
        })

        // Guardar en el almacenamiento local
        GuardarEnStorage("peli", pelicula);
    }


    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>

            {pelicula.titulo}

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    placeholder="Titulo"
                    name='titulo'
                    id='titulo'
                />
                <textarea
                    placeholder="Descripcion"
                    name='descripcion'
                    id='descripcion'></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
