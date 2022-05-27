import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Home from './home/Home';
import AllRooms from './rooms/AllRooms';
import Footer from '../components/footer';
import Header from '../components/header';
import React, { useState } from 'react';
import AppProvider from '../components/AppProvider';
import Cookies from 'js-cookie';
import ClubRoom from './rooms/ClubRoom';
import DeluxeRoom from './rooms/DeluxeRoom'
import SuperiorRoom from "./rooms/SuperiorRoom";
import ScrollToTop from "./rooms/ScrollToTop";
var isLogin = Cookies.get('id');
var isAdmin = Cookies.get('isAdmin');


// Condition for authentication
if(isLogin) {
  isLogin = true;
}
else {
  isLogin = false;
}

if(isAdmin === "1") {
  isAdmin = true;
}
else {
  isAdmin = false;
}

const ProtectedRoute = (props) => {
  if(isAdmin) {
    if(props.path === "/booking") {
      return <Redirect to="/" />
    }
    else if(props.path === "/payment") {
      return <Redirect to="/" />
    }
    else if(props.path === "/signin") {
      return <Redirect to="/" />
    }
    else if(props.path === "/signup") {
      return <Redirect to="/" />
    }
    else {
      return <Route path={props.path} component={props.component}></Route>
    }
  }

  else if(isLogin) {
    if(props.path === "/signin") {
      return <Redirect to="/" />
    }
    else if(props.path === "/signup") {
      return <Redirect to="/" />
    }
    else if(props.path === "/adminRoom") {
      return <Redirect to="/" />
    }
    else if(props.path === "/adminAccount") {
      return <Redirect to="/" />
    }
    else if(props.path === "/adminBooking") {
      return <Redirect to="/" />
    }
    else {
      return <Route path={props.path} component={props.component}></Route>
    }
  }
  else {
    if(props.path === "/adminRoom") {
      return <Redirect to ="/" />
    }
    else if(props.path === "/adminBooking") {
      return <Redirect to ="/" />
    }
    else if(props.path === "/adminAccount") {
      return <Redirect to ="/" />
    }
    else if(props.path === "/payment") { 
      return <Redirect to = "/signin" />
    }
    else if(props.path === "/account") {
      return <Redirect to="/signin"/>
    }
    else {
      return <Route path={props.path} component={props.component}></Route>
    }
  }
}


export default function Routes(){
  return(
    <div>
      <AppProvider>
      <Router>
        <ScrollToTop/>
        <Header/>
     
        <Switch>   
          <ProtectedRoute exact path="/rooms" component={AllRooms} />
          <ProtectedRoute exact path ="/ClubRoom" component = {ClubRoom} />
          <ProtectedRoute exact path ="/DeluxeRoom" component = {DeluxeRoom} />
          <ProtectedRoute exact path ="/SuperiorRoom" component = {SuperiorRoom} />
          <ProtectedRoute exact path="/"component={Home} />
        </Switch>
        <div className="footer">
          <Footer/>
        </div>
      </Router>
      
      </AppProvider>
    </div>
  );
}