import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Landingscreen() {
  return (
    <div>
       <Navbar/>
      <div className="landing row justify-content-center text-center bg">
        <div
          className="col-md-9 my-auto"
          style={{ borderRight: "8px solid white",position:"relative",top:"150px"}}
        >
          <h6 style={{ color: "black", fontSize: "50px",}} data-aos="zoom-in">
            SERENITY ROOMS
          </h6>
          <h1 style={{ color: "black" }} data-aos="zoom-out">
            “There is only one boss. The Guest.
          </h1>
          <Link to="/Registerscreen">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingscreen;
