import React from "react";
import "./Addcustomer.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { SaveFill } from "react-bootstrap-icons";
import { addCustomerAPI } from "../../API";

const Addcustomer = () => {
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = {
      id: 0,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone_number: phoneRef.current.value,
      created: 0,
    };

    console.log(e);
    addCustomerAPI(newCustomer).then(() => {
      alert("Sucessfully Submitted");
    });
    navigate(-1);
  };
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  let navigate = useNavigate();

  return (
    <div className="addnewcustomer">
      <div className="addnewcustomerhead">
        <h2>New Customer</h2>
      </div>
      <div className="addnewcustomerbody">
        <form onSubmit={onSubmit} className="addcus">
          <div className="addcusdiv">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              ref={nameRef}
              pattern="[a-zA-Z][a-zA-Z0-9-_]{3,23}"
              focused={focused.toString()}
            />
            <span>
              Name should be minimum 4-24 characters long and not contain
              special characters.
            </span>
          </div>
          <div className="addcusdiv">
            <label htmlFor="phone">Phone: </label>
            <input
              type="number"
              name="phone"
              ref={phoneRef}
              required
              pattern="[1-9]{1}[0-9]{9}"
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            <span>
              Phone number should be 10 digit long and only contain numbers.
            </span>
          </div>
          <div className="addcusdiv">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              focused={focused.toString()}
            />
            <span>It should be a valid email address.</span>
          </div>
          <div className="addcusdiv">
            <button type="submit" className="addcusbutton">
              <SaveFill />
              Save Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcustomer;

// import React from "react";
// import './Addcustomer.css'
// import {useNavigate} from "react-router-dom"
// import { useState, useEffect } from "react";
// import {SaveFill} from "react-bootstrap-icons"

// function Addcustomer() {
//     let navigate = useNavigate();
//     const saveCustomer = (e) =>
//     {
//         navigate('/');
//     }

//     const initialValues = { customername: "", phonenumber:"", emailid: "" };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormValues({ ...formValues, [name]: value });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setFormErrors(validate(formValues));
//       setIsSubmit(true);
//     };

//     useEffect(() => {
//       console.log(formErrors);
//       if (Object.keys(formErrors).length === 0 && isSubmit) {
//         console.log(formValues);
//       }
//     }, [formErrors]);
//     const validate = (values) => {
//       const errors = {};
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//       if (!values.customername) {
//         errors.username = "Customer name is required!";
//       }
//       if (!values.emailid) {
//         errors.email = "Email id is required!";
//       } else if (!regex.test(values.email)) {
//         errors.email = "This is not a valid email format!";
//       }
//       if (!values.phonenumber) {
//         errors.password = "Phonenumber is required";
//       } else if (values.phonenumber.length !== 10) {
//         errors.password = "Phonenumber must be 10 characters";
//       }
//       return errors;
//     };

//       return(
//           <div className="addnewcustomer">
//               <div className="addnewcustomerhead">
//                  <h2>Add New Customers</h2>
//               </div>
//               <div className="addnewcustomerbody">
//                 <form action="" className="addcus">
//                       <div className="addcusdiv">
//                         <label>Name:   <input type="text" name="name" />
//                         </label>
//                       </div>
//                       <div className="addcusdiv">
//                         <label>Phone: <input type="text" name="name" />
//                         </label>
//                       </div>
//                       <div className="addcusdiv">
//                         <label>Email: <input type="text" name="name" />
//                         </label>
//                       </div>
//                       <div className="addcusdiv">
//                         <button type="button" className="addcusbutton" onClick={saveCustomer} >
//                         <span>
//                           <SaveFill/>
//                         </span> Save Customer</button>
//                       </div>
//                 </form>
//               </div>
//           </div>
//       )
// };
// export default Addcustomer;

{
  /* <div className="addnewcustomer">
<div className="addnewcustomerhead">
   <h2>Add new customers</h2> 
</div>
<div className="addnewcustomerbody">
  <form onSubmit={handleSubmit} name="addcustom">
        <div className="addcusdiv">
          <label>
          Name:<input type="text" name="customername" placeholder="Name" value={formValues.username} onChange={handleChange}/>
          </label>
          {/* <label>Name:   <input type="text" name="name" />
          </label> */
}
//         </div>
//         <div className="addcusdiv">
//           {/* <label>
//           Phone:<input type="integer" name="phonenumber" placeholder="Phone Number" value={formValues.phonenumber} onChange={handleChange}/>
//           </label> */}
//         </div>
//         <div className="addcusdiv">
//           {/* <label>
//             Email:<input type="text" name="emailid" placeholder="Email id" value={formValues.emailid} onChange={handleChange}/>
//           </label>  */}
//         </div>
//         <div>
//     <button type="button" className="addcusbutton" onClick={saveCustomer} > Save Customer </button>
//   </div>
//   </form>
//   <br/>
// </div>
// </div>

{
  /* <header className='App-header'>
        <Router />
      </header> */
}

//       import React from "react";
// import Sidenavbar from "../Sidenavbar/Sidenavbar";
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './Addcustomer.css'
// import { useNavigate } from "react-router-dom";

//   function Addcustomer() {
//     let navigate = useNavigate();

//     const saveCustomer = (e) => {
//         navigate('/');
//     }
//     return (
//         <div className='main'>
//           <h1 className='header'>List Saved Customers</h1>
//           <br></br>
//           <div className='content'>
//             <div className='sidenavbar'>
//               <Sidenavbar />
//             </div>
//             <div className='addcustomer'>
//               <div className="addcusthead">
//                 <p>New Customer</p>
//               </div>
//               <div className="custbody">
//                 <form action="" name="addcustom">
//                   <label>
//                       Name:<input type="text" name="name" />
//                   </label>
//                   <label>
//                     Phone:<input type="text" name="phone" />
//                   </label>
//                   <label>
//                       Email:<input type="text" name="email" />
//                   </label>
//                 </form>
//                 <br/>
//                 <div>
//                       <button type="button" className="addcust" onClick={saveCustomer} > Save Customer </button>
//                   </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Addcustomer />);

// export default Addcustomer;
