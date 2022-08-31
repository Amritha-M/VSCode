import React from "react";
import './Additem.css'
import {useNavigate} from "react-router-dom"
import { useState,useRef } from "react";
import {SaveFill} from "react-bootstrap-icons"
import { addItemAPI } from "../../API";



const Additem = () => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      id: 0,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      created: 0,
    };

    console.log(e);
    addItemAPI(newItem).then(() => {
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
      <div className="addnewitem">
        <div className="addnewitemhead">
          <h2>New Item</h2>
        </div>
        <div className="addnewitembody">
          <form onSubmit={onSubmit} className="addit">
            <div className="additdiv">
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
            <div className="additdiv">
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                name="description"
                ref={descriptionRef}
                onBlur={handleFocus}
                focused={focused.toString()}
              />
              <span>
                description of the Item
              </span>
            </div>
            <div className="additdiv">
              <label htmlFor="price">Price: </label>
              <input 
                type="number" 
                name="price" 
                ref={priceRef}
                required
                focused={focused.toString}
              />
            </div>
            <div className="additdiv">
              <button type="submit" className="additbutton" >
                <span>
                  <SaveFill />
                </span>{" "}
                Save Item
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};
export default Additem;