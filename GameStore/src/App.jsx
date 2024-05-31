import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import Allproduct from './Pages/allproducts/Allproduct';
import Admin from './Pages/admin/Admin';
import Favourites from './Pages/favourites/Favourites';
import Nopage from './Pages/nopage/Nopage';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';
import Mystate from './Context/data/myState';
import AccountSettings from './Pages/accountSettings/AccountSettings';
import PasswordSecurity from './Pages/passwordSecurity/PasswordSecurity';
import RedeemCode from './Pages/redeemCode/RedeemCode';
import PaymentMethods from './Pages/paymentMethods/PaymentMethods';
import OrderHistory from './Pages/orderHistory/OrderHistory';
import DeveloperLogin from './Pages/Developers/Login/login';
import DeveloperSignup from './Pages/Developers/signup/signup';
import Dashboard from './Pages/Developers/Developerdashboard/Dashboard';
import ORGtype from './Pages/Developers/organization/organizationType/ORGtype';
import ORGnotifications from './Pages/Developers/organization/organizationNotifications/ORGnotifications';
import ORGsettings from './Pages/Developers/organization/organizationSettings/ORGsettings';
import Revenue from './Pages/Developers/myStore/revenue/Revenue';
import SalesReport from './Pages/Developers/myStore/salesReport/SalesReport';
import Library from './Pages/library/Library';


export default function App() {
  return (

    <Mystate>
      <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/library" element={<Library/>} />

        <Route path="/allproducts" element={<Allproduct/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/Favourites" element={<Favourites/>} />
        <Route path="/*" element={<Nopage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/accountsettings" element={<AccountSettings/>} />
        <Route path="/passwordsecurity" element={<PasswordSecurity/>} />
        <Route path="/redeemcode" element={<RedeemCode/>} />
        <Route path="/paymentmethods" element={<PaymentMethods/>} />
        <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/developerlogin" element={<DeveloperLogin/>} />
        <Route path="/developersignup" element={<DeveloperSignup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/organization-type" element={<ORGtype/>} />
        <Route path="/organization-notifications" element={<ORGnotifications/>} />
        <Route path="/organization-settings" element={<ORGsettings/>} />
        <Route path="/revenue" element={<Revenue/>} />
        <Route path="/sales-report" element={<SalesReport/>} />

      </Routes>
    </Router>
    </Mystate>
  )
}
