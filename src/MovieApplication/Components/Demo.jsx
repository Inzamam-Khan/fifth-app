import React from "react";
import user from '../images/user.jpg'
import mafia from '../images/mafia.avif'
import user2 from '../images/user2.avif'
export default function Demo() {
    return (<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">

            <div className="carousel-item active">
                <img src={user2} classNameName=" w-50" alt="..." />
            </div>

            <div className="carousel-item">
                <img src={mafia} classNameName=" w-50" alt="..." />
            </div>

            <div className="carousel-item">
                <img src={user} classNameName=" w-50" alt="..." />
            </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

    </div>)
}







