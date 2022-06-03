import React from "react";
import './App.css'
import Menu from '../components/layouts/Menu';
import Content from "../components/layouts/Content";
import { BrowserRouter } from "react-router-dom";

export default props =>{

    return(
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
    </div>
    );
}

