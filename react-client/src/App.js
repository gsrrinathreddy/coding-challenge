import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

import NavBar from './components/navbar/NavBar';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Categories from './pages/Categories';
import Offers from './pages/Offers';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar/> 
          <div className="container">
                <Route exact path="/home" component={Login}  />
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/products" component={Products}  />
                <Route exact path="/offers" component={Offers}/>
                <Route exact path="/login" component={Login}  />
                <Route exact path="/SignUp" component={SignUp}/>
            
            </div>
        </Router>
      </Provider>
     
        
    </div>
  );
}

export default App;
