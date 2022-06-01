import React from "react"
import * as Icon from 'react-bootstrap-icons';
import "./Sidebar.css"
const Sidebar=()=>{
  return(
      <div className="container-fluid">
      
      <div className="row ">

     <div className="col-lg-12 sidebar">

      <div className="top ">
      <span className="logo">Lama admin</span>
      </div>
      <hr/>
      

      
      <ul className="center ">

        <p className="title">MAIN</p>
        <li>
          <span>
          <Icon.BorderAll className="icon"/> Dashboard</span>
        </li>

        <p className="title">LISTS</p>
        <li>
        <Icon.Person className="icon"/> <span>Users</span>
        </li>
        <li>
        <Icon.Box2 className="icon"/> <span>Products</span>
        </li>
        <li>
        <Icon.CollectionFill className="icon"/> <span>Orders</span>
        </li>
        <li>
        <Icon.Truck  className="icon"/>  <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
        <Icon.FileBarGraph className="icon"/> <span>Stats</span>
        </li>
        <li>
        <Icon.Bell className="icon"/> <span>Notifications</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
        <Icon.Building className="icon"/> <span>System Health</span>
        </li>
        <li>
        <Icon.Wrench className="icon"/> <span>Logs</span>
        </li>
        <li>
        <Icon.Gear className="icon"/> <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
        <Icon.PersonCircle className="icon" /> <span>Profile</span>
        </li>
        <li>
        <Icon.BoxArrowRight className="icon"/> <span>Logout</span>
        </li>
      </ul>

      <div className="bottom">

       <div className="coloroption"></div>
       <div  className="coloroption"></div>
      

      </div>

       </div>
       
       </div>
     





     </div> )
}

export default Sidebar