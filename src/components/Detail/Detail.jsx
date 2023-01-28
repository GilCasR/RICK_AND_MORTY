import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import styles from "../Card.module.css";

export default function Detail (){

    const { detailId } = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            console.log(char);
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    return(
        <div className={styles.card} key={character.name}>
            <h1 >{character.name}</h1>
            
        </div>
    )
}