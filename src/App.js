import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';

/*PÁGINAS*/
import Home from './pages/home/index';
import Biografia from './pages/bio/index';
import Agenda from './pages/agenda/index';
import Contato from './pages/contato/index';
import Discografia from './pages/discografia/index';
import Loja from './pages/loja/index';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/biografia' component={Biografia}/>
      <Route exact path='/agenda' component={Agenda}/>
      <Route exact path='/contato' component={Contato}/>
      <Route exact path='/discografia' component={Discografia}/>
      <Route exact path='/loja' component={Loja}/>
    </Router>
  );
}

export default App;
