import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import Details from './components/Details';
import Videos from './components/youtube/Videos';

class App extends Component{
  render(){
    return (
      // <div className="container">
      //   <h1>Ecommerce Shopping Cart Application</h1>
      //   <hr/>
      //   <div className="row">
      //     <div className="col-md-8">
      //         <Filter/>
      //         <hr/>
      //         <Products/>
      //     </div>
      //     <div className="col-md-4">
      //         <span><i className="fa fa-home"></i></span>
      //         <Basket />
      //     </div>
      //   </div>
      // </div>
      <BrowserRouter>
        <React.Fragment>
          <Navbar/> 
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path="/cart" component={Basket}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/videos" component={Videos}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
