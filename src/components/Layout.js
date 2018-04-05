import React from "react";
import Hero from "./Hero";
import Hello from "./Hello";
import Skills from "./Skills";
import Works from "./Works";
import Hireme from "./Hireme";
import "../scss/style.scss";

const Layout=(props)=>{
    return(
        <div className="wrapper">
            <Hero/>
            <Hello/>
            <Skills/>
            <Hireme/>
        </div>
    )
}

export default Layout;