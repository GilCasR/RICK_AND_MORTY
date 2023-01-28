import React, { useState } from 'react';
import { Routes, Route, useLocation} from "react-router-dom"
import './App.css'
 //import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
 // import characters, { Rick } from './data.js'
import styles from "./components/Card.module.css";
import Nav from "./components/Nav.jsx";
import About from './components/About/About.jsx';
import Detail from "./components/Detail/Detail.jsx";
import Form from './components/form/Form';




function App () {
  const [characters, setCharacters] = useState ([]);
  const logInLocation = useLocation()

  //onSearch function

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          
           if (data.name) {
              console.log(characters);
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
    }

    const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
    } 

  // To render
  return (
    
    <div className={styles.app} style={{ padding: '25px' }}>
      <div>
        {logInLocation.pathname !== "/" && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path ="/" element = {<Form/>}/>
        <Route path = "/home" element = {<Cards characters={characters} onClose={onClose} />}/>
        <Route path ='/about' element = { <About/>}/>
        <Route path = "/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
