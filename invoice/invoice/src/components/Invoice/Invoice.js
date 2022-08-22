import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './Invoice.css'
import {useNavigate} from "react-router-dom"
import Table from "../Table/Table";

const data = [
    { Date: "Robert", Customer: 23, Number: "Male", Paidstatus: "Full Stack(React + Java) Developer", Amount:"100",AmountDue:"100" },
    { Name: "Michal", Phone: 24, email: "Male", CreatedOn: "Full Stack Engineer" },
    { Name: "Morgan", Phone: 24, email: "Female", CreatedOn: "React Developer" },
    { Name: "Tom", Phone: 26, email: "Male", CreatedOn: "Front End Developer" },
    { Name: "Steve",Phone: 27, email: "Female", CreatedOn: "UI/UX Designer" }
  ]
  


function Invoice() {
    let navigate = useNavigate();
    const addInvoice = (e) =>
    {
        navigate('/newinvoice');
    }
    return(
        <div className="invoicelist">
            <div className="invoicelisthead">
               <h2>List of Invoices</h2> 
               <button type="button" className="button" onClick={addInvoice}> + New Invoice</button>
            </div>
            <div className="invoicebody">
                <Table data={data}/>
            </div>
        </div>
    )
};
export default Invoice;
