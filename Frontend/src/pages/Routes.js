import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Home from './home/Home';
import Footer from '../components/footer';
import Header from '../components/header';
import AppProvider from '../components/AppProvider';
import React, { useState } from 'react';


export default function Routes(){
    return(
      <div>
        <AppProvider>
        <Router>
          <ScrollToTop/>
          <Header/>
          {/* <Link to="/">Home</Link>
        
          <Link to="/booking">Booking</Link>
      
          <Link to="/rooms">Rooms</Link>
        
          <Link to="/services">Services</Link>
        
          <Link to="/signin">SignIn</Link> */}
       
          <Switch>   
            {/* <ProtectedRoute exact path="/booking" component={Booking} />
            <ProtectedRoute exact path="/payment" component={Payment} />
            <ProtectedRoute exact path="/rooms" component={AllRooms} />
            <ProtectedRoute exact path="/services" component={Services} />
            <ProtectedRoute exact path="/signup" component={SignUp} />
            <ProtectedRoute exact path="/signin" component={SignIn} />
            <ProtectedRoute exact path="/adminRoom" component={Admin} />
            <ProtectedRoute exact path="/adminBooking" component = {AdminBooking} />
            <ProtectedRoute exact path="/adminAccount" component = {AdminAccount} />
            <ProtectedRoute exact path ="/account" component={Account}/>
            <ProtectedRoute exact path ="/ClubRoom" component = {ClubRoom} />
            <ProtectedRoute exact path ="/DeluxeRoom" component = {DeluxeRoom} />
            <ProtectedRoute exact path ="/SuperiorRoom" component = {SuperiorRoom} /> */}
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