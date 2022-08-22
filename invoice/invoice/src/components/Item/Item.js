import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './Item.css'
import {useNavigate} from "react-router-dom"
import Table from "../Table/Table";

const data = [
    { Name: "Robert", Description: 23, Price: "Male", AddedOn: "Full Stack(React + Java) Developer" },
    { Name: "Michal", Phone: 24, email: "Male", CreatedOn: "Full Stack Engineer" },
    { Name: "Morgan", Phone: 24, email: "Female", CreatedOn: "React Developer" },
    { Name: "Tom", Phone: 26, email: "Male", CreatedOn: "Front End Developer" },
    { Name: "Steve",Phone: 27, email: "Female", CreatedOn: "UI/UX Designer" }
  ]
  

function Item() {
    let navigate = useNavigate();
    const addItem = (e) =>
    {
        navigate('/newitem');
    }
    return(
        <div className="itemlist">
            <div className="itemlisthead">
               <h2>List of Items</h2> 
               <button type="button" className="button" onClick={addItem}> + New Item</button>
            </div>
            <div className="itembody">
                <Table data={data}/>
            </div>
        </div>
    )
};
export default Item;
