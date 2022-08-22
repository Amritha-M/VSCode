import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './Additem.css'
import {useNavigate} from "react-router-dom"
import Table from "../Table/Table";
import ReactDOM from 'react-dom/client';
import {SaveFill} from "react-bootstrap-icons"


function Additem() {
    let navigate = useNavigate();
    const saveItem = (e) =>
    {
        navigate('/item');
    }
    return(
        <div className="addnewitem">
            <div className="addnewitemhead">
               <h2>Add New Items</h2> 
            </div>
            <div className="addnewitembody">
              <form action="" className="addit">
                    <div className="additdiv">
                      <label>Name:   </label>
                      <input type="text" name="name" />
                    </div>
                    <div className="additdiv">
                      <label>Price: </label>
                      <input type="text" name="name" />
                    </div>
                    <div className="additdiv">
                      <label>Description: </label><input type="text" name="name" />  
                    </div>
                    <div className="additdiv">
                      <button type="button" className="additbutton" onClick={saveItem} > 
                      <span>
                        <SaveFill/>  
                      </span> Save Item</button> 
                    </div>     
              </form>
            </div>
        </div>
    )
};
export default Additem;