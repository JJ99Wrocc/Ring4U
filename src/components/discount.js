import React from "react";
import '../css/index.css';

const Discount = () => {
    return(
        <div  className="discount"> 
            <div className="discount-img">
                   <p    className="zoom-loop">ODBIERZ 10% ZNIŻKI</p> 
                   <i  className="fa-solid fa-arrow-right-long  arrow-in-right-corner  " style={{fontSize: '22px'}}></i>
            </div>
         </div>
    )
}

export default Discount;