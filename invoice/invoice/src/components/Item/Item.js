import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './Item.css'
import {useNavigate} from "react-router-dom"
import Table from "../Table/Table";
import { getItemsAPI } from "../../API";
import {useEffect, useState} from "react";


const data = [
    { Name: "Robert", Description: 23, Price: "Male", AddedOn: "Full Stack(React + Java) Developer" },
    { Name: "Michal", Phone: 24, email: "Male", CreatedOn: "Full Stack Engineer" },
    { Name: "Morgan", Phone: 24, email: "Female", CreatedOn: "React Developer" },
    { Name: "Tom", Phone: 26, email: "Male", CreatedOn: "Front End Developer" },
    { Name: "Steve",Phone: 27, email: "Female", CreatedOn: "UI/UX Designer" }
  ]
  

function Item() {
    const [data, setData ] = useState([]);

    const getItem = async () => {
        const payload = {
            sort_key:"name",
            sort_value:"ASC",
          };      
        const data1 = await getItemsAPI(payload);
        console.log(data1);
        setData(data1.item);
    }

    useEffect(() => {
        getItem();
    }, []);

    let navigate = useNavigate();
    const addItem = (e) =>
    {
        navigate('/newitem');
    }

    return(
        <div className="itemlist">
            <div className="itemlisthead">
               <h2>Items</h2> 
               <button type="button" className="button" onClick={addItem}> + New Item</button>
            </div>
            <div className="itembody">
                <Table data={data}/>
            </div>
        </div>
    )
};
export default Item;
