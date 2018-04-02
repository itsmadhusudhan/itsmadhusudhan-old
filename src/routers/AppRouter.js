import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Casestudies from "../components/Casestudies";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Layout} exact={true} />
          <Route path="/casestudies" component={Casestudies} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
