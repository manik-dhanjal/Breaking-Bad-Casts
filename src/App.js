import React from "react"
import { Switch, Route} from "react-router-dom";
import axios from "axios";

import Layout from "./components/global/layout/layout.global";
import Home from "./page/home.page";
import AboutCharachter from "./page/about-charachter.page";
import NotFound from "./page/not-found.page";

axios.defaults.baseURL = 'https://www.breakingbadapi.com/api/';

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/character/:id" exact={true} component={AboutCharachter}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  );
}

export default App;
