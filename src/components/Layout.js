import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Hello from "./Hello";
import Skills from "./Skills";
import Hireme from "./Hireme";
import Footer from "./Footer";
import "../scss/style.scss";

const Layout=(props)=>{
    return(
        <div className="wrapper">
            <Header/>   
            <Hero/>
            <Hello/>
            <Skills/>
            <Hireme/>
            <Footer/>   
        </div>
    )
}

export default Layout;