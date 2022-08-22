import React from "react";
import {NavLink} from "react-router-dom";
import { Star, StarFill,Person, PersonFill, FileEarmarkText,FileEarmarkTextFill} from 'react-bootstrap-icons';
import './Sidenavbar.css'



function Sidenavbar(){
    const listItems = [{
        route:'/',
        title:"Customer",
        icon: <PersonFill/>,
        iconstatic: <Person/>
    }, {
        route:'/item',
        title:"Item",
        icon: <StarFill />,
        iconstatic: <Star/>
    }, {
        route:'/invoice',
        title:"Invoice",
        icon: <FileEarmarkTextFill/>,
        iconstatic: <FileEarmarkText/>
    }]
    return(

        <div className="sidenavbar">
            {
                listItems.map(item => {
                    return (
                        <div key={item.route} className="sidenavbaritem">
                            <NavLink to={item.route} className={({ isActive }) => (isActive ? 'sidenavbaritemsactive' : 'sidenavbaritems')}
                            style={{ textDecoration: 'none', padding:'0px', margin: '0px', width:'100%'}}>
                                <span >
                                {item.icon}
                                {item.iconstatic} {item.title}
                                </span>
                            </NavLink>
                        </div>
                    );
                })
            }
                
                {/* <div className="sidenavbaritem">
                    <NavLink to='/item' className={({ isActive }) => (isActive ? 'sidenavbaritemsactive' : 'sidenavbaritems')}
                    style={{ textDecoration: 'none', padding:'0px', margin: '0px' , width:'100%'}}>
                        <span >
                            <StarFill />
                            <Star /> Item
                        </span>
                    </NavLink>
                </div>
                <div className="sidenavbaritem">
                    <NavLink to='/invoice' className={({ isActive }) => (isActive ? 'sidenavbaritemsactive' : 'sidenavbaritems')}
                    style={{ textDecoration: 'none', padding:'0px', margin: '0px', width:'100%' }}>
                        <span >
                             < FileEarmarkTextFill/>
                            <FileEarmarkText /> Invoice 
                        </span>
                    </NavLink>
                </div> */}
        </div>
    )
}

export default Sidenavbar;














// import React from "react";
//className={({ isActive }) => (isActive ? 'sidenavbaritemsactive' : 'sidenavbaritems')}

// function Sidenavbar(){
//     return(
//         <div className='sidenavbar'> 
//             <span>
//                 <ul>
//                     <menu>
//                         <li><a className="sidebaritem" href="/customer">Customers</a></li>
//                         <li><a className="sidebaritem" href="/item">Items</a></li>
//                         <li><a className="sidebaritem" href="/invoice">Invoices</a></li>
//                     </menu>
//                     {/* <li><a href="Customers.html">Customers</a></li>
//                     <li><a href="Items.html">Items</a></li>
//                     <li><a href="Invoices.html">Invoices</a></li> */}

//                 </ul>
//             </span>
                    
//       </div>
//     )

// }

// export default Sidenavbar;


