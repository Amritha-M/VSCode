import { Routes, Route } from "react-router-dom";
import Customer from "./components/Customer/Customer";
import Addcustomer from "./components/Addcustomer/Addcustomer"
import Item from"./components/Item/Item";
import Additem from "./components/Additem/Additem"
import Invoice from "./components/Invoice/Invoice";
import Addinvoice from"./components/Addinvoice/Addinvoice";

export default function Router(props) {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Customer/>}></Route>
                <Route path="/newcustomer" element={<Addcustomer/>}></Route>
                <Route path="/newitem" element={<Additem/>}></Route>
                <Route path="/item" element={<Item/>}></Route>
                <Route path="/newinvoice" element={<Addinvoice/>}></Route>
                <Route path="/invoice" element={<Invoice/>}></Route>
            </Routes>
        </div>
    )
}