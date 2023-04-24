import React from "react";
import './Card.css';

export default function Card(param){
    const pin = "../public/images.png"
    return(
        <div className="card">
            <img src={param.img} alt="place" className="main-img"/>
            <div className="detail">
                <div className="heading">
                    <img src={pin} alt="pin" />
                    <h4>{param.country}</h4>
                    <a href={param.map}>View on Google Maps</a>
                </div>
                <h2>{param.title}</h2>
                <h4>{param.start} - {param.end}</h4>
                <p>{param.details}</p>
            </div>
        </div>
    );
}