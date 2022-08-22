import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './Addinvoice.css'
import {useNavigate} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import {SaveFill} from "react-bootstrap-icons"




function Addinvoice() {
  let navigate = useNavigate();
  const saveInvoice = (e) =>
  {
      navigate('/invoice');
  }
  return(
      <div className="addnewinvoice">
          <div className="addnewinvoicehead">
             <h2>Add New Invoice</h2> 
          </div>
          <div className="addnewinvoicebody">
            <form action="" className="addinv">
                  <div className="addinvdiv">
                    <label>Name:   
                    </label><input type="text" name="name" />
                  </div>
                  <div className="addinvdiv">
                    <label>Phone: 
                    </label><input type="text" name="name" />
                  </div>
                  <div className="addinvdiv">
                    <label>Email: 
                    </label> <input type="text" name="name" />
                  </div>
                  <div className="addinvdiv">
                    <button type="button" className="addinvbutton" onClick={saveInvoice} > 
                    <span>
                      <SaveFill/>  
                    </span> Save Invoice</button> 
                  </div>     
            </form>
          </div>
      </div>
  )
};
export default Addinvoice;