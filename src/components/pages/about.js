import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the ToDo list App, it is Developed and Maintained By <a style={linkStylee} href={'http://github.com/akshaykalucha3'}>Akshay Kalucha</a>
            </p>
        </React.Fragment>
    )
}

//linkstyle 
const linkStylee = {
    color: 'black'
}