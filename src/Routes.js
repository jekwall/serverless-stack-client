import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

//Switch is a component from React-Router that renders the first matching route defined whithin it
export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} /> 
        { /*Finally, catch all unmatched routes */} 
        <Route component={NotFound} />
      </Switch>  
    );
    //NotFound routing is last since the router handles all request until it fails
    //the exact prop ensure it matches the / route exactly
}