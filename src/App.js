import React,{useState,useEffect} from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import {Navbar,Nav} from 'react-bootstrap'
import {AppContext} from './context'
import './App1.css'


import {
  HashRouter as Router,
  Link,Switch,Route
} from 'react-router-dom'


function App() {

  const [dark,setMode] = useState(false)

  return (
    <div className="App1">
    <div className="container-fluid">
      <AppContext.Provider  value={{dark:dark ,setMode:setMode}}>

        <Router>
          <Header />
          <Switch >
              <Route exact path="/" >
                    <World/>
              </Route>
          </Switch>

        </Router>
      </AppContext.Provider>
    </div>
    </div>
  );
}

export default App;
