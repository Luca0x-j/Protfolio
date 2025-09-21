import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Tec from "./components/Tecnologias/Tec"
import Sobre from "./components/Sobre/Sobre";
import Project from "./components/Projetos/Project";

function App () {
    return (
        <>
            <Header />
            <Home />
            <Tec />
            <Sobre />
            <Project />
            {/* {Outra parte} */}
        </>
    )
}

export default App;