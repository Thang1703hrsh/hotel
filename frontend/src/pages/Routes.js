import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import SignIn from './signIn/SignIn';
import SignUp from './signIn/SignUp'
import Home from './home/Home';
import AllRooms from './rooms/AllRooms';
import Footer from '../components/footer';
import Header from '../components/header';
import React, { useState } from 'react';
import AppProvider from '../components/AppProvider';
import Booking from './booking/Booking'
import Cookies from 'js-cookie';
import Services from './services/Services';
import PlusKingRoom from './rooms/PlusKingRoom';
import SuperiorTwinRoom from './rooms/SuperiorTwinRoom'
import SuperiorKingRoom from "./rooms/SuperiorKingRoom";
import ScrollToTop from "./rooms/ScrollToTop";
import Payment from "./booking/Payment";

var isLogin = localStorage.getItem("token");
// Condition for authentication
// if(isLogin) {
//   isLogin = true;
// }
// else {
//   isLogin = false;
// }

// if(isAdmin === "1") {
//   isAdmin = true;
// }
// else {
//   isAdmin = false;
// }

const ProtectedRoute = (props) => {
  // if(isAdmin) {
  //   if(props.path === "/booking") {
  //     return <Route path="/booking" component={Booking}/>
  //   }
  //   else if(props.path === "/payment") {
  //     return <Route path="/payment" component={Payment} />
  //   }
  //   else if(props.path === "/signin") {
  //     return <Redirect to="/" />
  //   }
  //   else if(props.path === "/signup") {
  //     return <Redirect to="/" />
  //   }
  //   else {
  //     return <Route path={props.path} component={props.component}></Route>
  //   }
  // }

  if(isLogin) {
    console.log("The logined user: " + props.path)
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
      return <Redirect to="/payment" />
    }
    else if(props.path === "/account") {
      return <Redirect to="/signin"/>
    }
    else {
      console.log(props.path)
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
          <ProtectedRoute exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/signin" component={SignIn} />
          <ProtectedRoute exact path="/services" component={Services} />

          <ProtectedRoute exact path ="/PlusKingRoom" component = {PlusKingRoom} />
          <ProtectedRoute exact path ="/SuperiorTwinRoom" component = {SuperiorTwinRoom} />
          <ProtectedRoute exact path ="/SuperiorKingRoom" component = {SuperiorKingRoom} />
          <ProtectedRoute exact path="/"component={Home} />
          <ProtectedRoute exact path="/booking" component={Booking} />
          <ProtectedRoute exact path="/payment" component={Payment} />
        </Switch>
        <div className="footer">
          <Footer/>
        </div>
      </Router>
      
      </AppProvider>
    </div>
  );
}