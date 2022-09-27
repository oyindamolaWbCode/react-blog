import NavBar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import React from "react";
const LazyFound = React.lazy(() => import ("./NotFound"));

function App() {
  return (
    <Router>""
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
        <Route path="*" className="ntfound">
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyFound />
          </React.Suspense>
            </Route>
      </div>
    </Router>
  );
}

export default App;
