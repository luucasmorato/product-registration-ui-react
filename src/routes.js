import React from "react";

//configure routes
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewProduct} />
    </Switch>
  );
}
