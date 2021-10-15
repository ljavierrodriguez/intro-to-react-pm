import React from 'react';

import './style.css';

import { ComponentA, ComponentB } from './ComponentA';
import { Enlace } from './Enlace';
import { MyAlert } from './MyAlert';
import { MyDropDown } from './MyDropDown';

let nombres = ['Jairo', 'Michelle', 'Patricia', 'Jorge', 'Jesus'];

function App() {

    let listNombres = nombres.map((valor, indice, arreglo) => { // valor, indice, arreglo
        return <li key={indice}>{valor}</li>;
    });

    return (
        <>
            <MyAlert />
            <h1>Hola desde React</h1>
            <ComponentA />
            <ComponentB />
            <MyDropDown />
            <Enlace href={"https://google.cl"} texto={"Google"} className={"links"} edad={39} />
            <Enlace href={"https://facebook.com"} texto={"Facebook"} className={"links"} />
            <Enlace href={"https://instagram.com"} texto={"Instagram"} className={"links"} />
            <ol>
                {listNombres}
            </ol>
            <ul>
                {
                    nombres.sort((a, b) => a > b ? 1 : -1).map((valor, indice, arreglo) => { // valor, indice, arreglo
                        return <li key={indice}>{valor}</li>;
                    })
                }
            </ul>
        </>
    )
}

export default App;