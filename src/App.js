import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
import Doctor from "./Pages/doctor";
import Patient from "./Pages/patient";
import Manage from "./Pages/ManageDocument";
import GrantAccess from "./Pages/Grantaccess";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import { UserList } from "./Pages/Removedoc";
import { Add } from "./Pages/Adddoctor";
import { Request } from "./Pages/RequestDocx";

import "./App.css";




function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Route path='/home'>
     <Home/>
     </Route>
     <Route path='/login'>
       <Login/>
     </Route>
     {/* <Route path='/signup'>
       <Signup/>
     </Route> */}
     <Route path='/doctor-post'>
       <Doctor/>
     </Route>
     <Route path='/patient-post'>
       <Patient/>
     </Route>
     <Route path='/manage-post'>
       <Manage/>
     </Route>
     <Route path='/grant-post'>
       <GrantAccess/>
     </Route>
     <Route path='/admin'>
       <Admin/>
     </Route>
     <Route path='/user-list'>
       <UserList/>
     </Route>
     <Route path='/Add-doc'>
       <Add/>
     </Route>
     <Route path='/Req-doc'>
       <Request/>
     </Route>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
