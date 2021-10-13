import React from 'react';

import './style.css';

import { ComponentA, ComponentB } from './ComponentA';
import { Enlace } from './Enlace';
import { MyAlert } from './MyAlert';
import { MyDropDown } from './MyDropDown';

function App() {
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
        </>
    )
}

export default App;