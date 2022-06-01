import React from "react"
import Navbar from "../../component/navbar/Navbar"
import Widget from "../../component/widget/Widget"
import Featured from "../../component/featured/featured"
import Chart from "../../component/chart/chart"
import "./Home.css"
const Home=()=>{
  return(
      <div className="container-fluid">   
      <div className=" row ">
      <div className=" col-lg-12 " >
        <Navbar/> 
        </div>
        </div>


        <div className="row" style={{marginTop:'2%',marginLeft:'1%'}}>
        <div className=" row col-lg-12 " >
        <div className=" col-lg-3 col-md-6 col-sm-6"><Widget type="user"/></div>
       
        <div className=" col-lg-3 col-md-6 col-sm-6"><Widget type="order"/></div>
        
        <div className=" col-lg-3 col-md-6 col-sm-6"><Widget type="earning"/></div>
        
        <div className=" col-lg-3 col-md-6 col-sm-6"><Widget type="balance"/></div>
        
          </div> 

          <div className="row" style={{marginTop:'2%'}}>
          <div className=" row col-lg-5 col-md-8 col-sm-8" >
           <Featured/>
            </div>
           
            <div className=" row col-lg-7 " >
            <Chart/>
            </div>
            </div>

            <div className="row" style={{marginTop:'2%'}}>dfsdd</div>


           

      </div>
      </div>
      
  )
}

export default Home
  