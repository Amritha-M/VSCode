import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


const Customer = lazy(() => import("./components/Customer/Customer"));
const Item = lazy(() => import("./components/Item/Item"));
const Addcustomer = lazy(() => import("./components/Addcustomer/Addcustomer"));
const Additem = lazy(() => import("./components/Additem/Additem"));
const Invoice = lazy(()=> import("./components/Invoice/Invoice"));
const Addinvoice = lazy(()=> import("./components/Addinvoice/Addinvoice"));
const Login = lazy(()=> import("./components/Login/Login"));


export default function Router(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Customer />}></Route>
        <Route path="/newcustomer" element={<Addcustomer />}></Route>
        <Route path="/newitem" element={<Additem />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/newinvoice" element={<Addinvoice />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Suspense>
  );
}
