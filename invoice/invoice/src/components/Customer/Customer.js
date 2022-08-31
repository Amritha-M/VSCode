import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Customer.css";
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";
import { getCustomersAPI } from "../../API";
import { useEffect } from "react";

// const data = [
//     { Name: "Robert", Phone: 23, Email: "abc@gmail.com", CreatedOn: "Full Stack(React + Java) Developer" },
//     { Name: "Michal", Phone: 24, Email: "abc@gmail.com", CreatedOn: "Full Stack Engineer" },
//     { Name: "Morgan", Phone: 24, Email: "abc@gmail.com", CreatedOn: "React Developer" },
//     { Name: "Tom", Phone: 26, Email: "abc@gmail.com", CreatedOn: "Front End Developer" },
//     { Name: "Steve",Phone: 27, Email: "abc@gmail.com", CreatedOn: "UI/UX Designer" }
//   ]

const Customer = () => {
  const [data, setData] = useState([]);

  const getCustomer = async () => {
    const payload = {
      sort_key: "name",
      sort_value: "ASC",
    };
    const data1 = await getCustomersAPI(payload);
    console.log(data1);
    setData(data1.customer);
  };

  useEffect(() => {
    getCustomer();
  }, []);

  let navigate = useNavigate();

  const addCustomer = (e) => {
    navigate("newcustomer");
  };

  return (
    <div className="customerlist">
      <div className="customerlisthead">
        <h2>Customers</h2>
        <button type="button" className="button" onClick={addCustomer}>
          {" "}
          + New Customer
        </button>
      </div>
      <div className="customerbody">
        <Table data={data} />
      </div>
    </div>
  );
};
export default Customer;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Addcustomer from "../Addcustomer/Addcustomer";
// import './Customer.css'
// import { useNavigate } from "react-router-dom";
// import Table from "../table/Table";

// function Customer() {
//     let navigate = useNavigate();

//     const addCustomer = (e) => {
//         navigate('/customer/new');
//     }

//     return (

//         <div className="customerlist">
//             <div className="head">
//                 <p style={{fontweight:"bold"}}>Customers</p>
//                 <div>
//                     <button type="button" className="addcust" onClick={addCustomer} > + New Customer </button>

//                 </div>
//             </div>
//             <div className="table">
//                 <Table />
//             </div>
//         </div>
//     );
// };

// export default Customer;

{
  /* <button onclick={<a href=""></a>}  type="button" className="addcust" > + New Customer </button> */
}
{
  /* <Link to="./Addcustomer">
                    <button type="button">
                        + New Customer
                    </button>
                </Link> */
}
