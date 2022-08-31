import React from "react";
import "./Appheader.css";
import { useNavigate } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";

const Appheader=() =>{
    let navigate = useNavigate();
    const saveCustomer = (e) =>
   {
       navigate('/login');
   }
    return(
            <div className="appheader">
                   Invoice App
                <button type="button" className="loginbutton" onClick={saveCustomer}> 
                        <PersonFill/>  
                       Login</button>   
            </div>
    )
}

export default Appheader;