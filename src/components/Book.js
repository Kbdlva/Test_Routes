import React from "react";
import { useParams } from "react-router-dom";

export function Book(props) {
    const { id } = useParams()


    return (
        <div className="container">
            <h1>Genres: { id }</h1>
            <p><img src={props.title} alt="cat"/>
                </p>
        </div>
    )
}

