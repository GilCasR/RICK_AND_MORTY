import SearchBar from './SearchBar.jsx'
import styles from "./Card.module.css";
import React from 'react';
import About from './About/About.jsx';
import { Link } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        <div className={styles.nav}>
            <Link to="/Home">Home</Link>
            <br />
            <Link to="/About">About</Link>
            <br />
            <SearchBar onSearch={onSearch}/>
        </div>
    )

}