import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';


function App() {
    return (
       <Router>
          <div>
             <Navbar />
             <Switch>
                <Route exact path='/search' component={Search} />
                <Route exact path='/saved' component={Saved} />
                <Route component={NoMatch} />
             </Switch>
          </div>
       </Router>
    );
  }

export default App;
