import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      
      <div className="row p-5">
      <div className="col-6 p-5" id="search">
        <h1 className="fs-3">Search for an answer or browse help topic to create a ticket</h1>
        <input type="text" placeholder="Eg: how do i activate F&Q, why is my order getting rejected.."  /><br />
        <a href="" style={{lineHeight: "2.5", marginRight:"10px" }}>Track account opening</a>
        <a href="" style={{lineHeight: "2.5", marginRight:"10px" }}>Track segment activation</a>
        <a href="" style={{lineHeight: "2.5", marginRight:"10px" }}>Intradat</a><br />
        <a href="" style={{lineHeight: "2.5", marginRight:"10px" }}>margins</a>
        <a href="">Kite user manual</a>
      </div>
      <div className="col-6 p-5">
        <h1 className="fs-3">Featured</h1>
        <ol>

        <li>
        <a href="" style={{ lineHeight: "2.5" }}>Current Takeovers and Delisting - January 2025</a><br />
        </li>
        <li>
        <a href="">latest Intraday leverages - MIS & CO</a>
        </li>
        </ol>
      </div>
      </div>
    </section>
  );
}

export default Hero;
