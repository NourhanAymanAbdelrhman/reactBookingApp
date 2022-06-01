import React from "react"
import "./Widget.css"
import * as Icon from 'react-bootstrap-icons';
const Widget=({type})=>{
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Icon.FilePerson
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <Icon.Cart
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <Icon.Coin
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <Icon.Wallet
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return(
      <div  className="row widget">

       <div className=" left col-lg-8 col-md-6 ">
       <span style={{ color: 'rgb(160, 160, 160)'}}>
         {data.title}</span><br/>
        <span style={{ color: 'rgb(0, 0, 0)'}}>
        {data.isMoney && "$"} {amount} </span><br/>
        <span className="link ">
        {data.link}</span><br/>
       </div>

       <div className="right col-lg-4 col-md-6">
       <div className="percentage">
        <Icon.ChevronUp className="icondash"/>
        {diff}%
        </div>  
        <div className="iconperson">
        {data.icon}
        </div>
       </div>

      </div>
  )
}

export default Widget