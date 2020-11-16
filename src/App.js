import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails';
import BookingList from './components/Dashboard/BookingDashboard/BookingList/BookingList';
import AddRent from './components/Dashboard/AddRentDashboard/AddRent/AddRent';
import MyRent from './components/Dashboard/MyRentDashboard/MyRent/MyRent';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();


function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <PrivateRoute path="/homeDetails" >
            <HomeDetails></HomeDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/bookingList" >
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/addRent" >
            <AddRent></AddRent>
          </PrivateRoute>
          <PrivateRoute path="/myRent" >
            <MyRent></MyRent>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
