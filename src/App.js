import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./components/Navigation/NavBar";
import Create from './components/create/Create'
import BlogDetails from "./components/BlogDetails/BlogDetails";
import NotFound from "./components/NotFound/NotFound";


function App() {

  return (
    <Router>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <NavBar/>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      </div>
     {/* <Home/> */}
    </div>
    </Router>
  );
}
export default App;
