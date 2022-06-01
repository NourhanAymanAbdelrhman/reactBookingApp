import React from "react"
import "./featured.css"
import * as Icon from 'react-bootstrap-icons';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; 
const Featured=()=>{
    return(
        <div className="container-fluid featured">
        
        <div className="row">
        <div className="top">
            <h1 className="titlefeature col-6 ">
            Total Revenue
            </h1>
            <Icon.ThreeDotsVertical className=" offset-3 col-1"/>
        </div>
       </div>

        <div className="row bottom">
        <div className=" col-5 ">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={1}/>
        </div>

        <h3 className="titleSale">Total sales made today</h3>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
       </div>
       <div className="row">
        <div className="summary col-12 row">
          <div className="item col-4">
            <div className="itemTitle">Target</div>
            <div className=" negative">
              <Icon.ChevronDown fontSize="small"/>
              <span className="negative">$12.4k</span>
            </div>
          </div>
        
          <div className="item col-4">
            <div className="itemTitle">Last Week</div>
            <div className=" positive">
              <Icon.ChevronUp fontSize="small"/>
              <span className="positive">$12.4k</span>
            </div>
          </div>
           

          <div className="item col-4">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <Icon.ChevronUp fontSize="small"/>
              <span className="positive">$12.4k</span>
            </div>
          </div>
        </div>


          
        </div>







        </div>
    )
}


export default Featured