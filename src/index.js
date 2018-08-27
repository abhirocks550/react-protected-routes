import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import About from './components/About/About';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router> 
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
    </div>   
</Router>
, document.getElementById('root')
);
registerServiceWorker();
