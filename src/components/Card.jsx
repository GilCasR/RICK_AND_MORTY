import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
 
export default function Card(props) {
   return (
      <div className={styles.card} key={props.name}>
         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`} >
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={styles.img} src={props.image} alt="Image not found" />
      </div>
   );
}


