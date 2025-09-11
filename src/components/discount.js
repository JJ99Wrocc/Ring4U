import { useState } from 'react';
import React from "react";
import '../css/index.css';
import DiscountBox from "./discountbox";

const Discount = () => {
    const [showBox, setShowBox] = useState(false);
    return(
        <>
        <div  
            className="discount" 
            onClick={() => setShowBox(true)} 
            role="button"
            tabIndex={0}
            aria-label="Odbierz 10% zniżki"
            aria-expanded={showBox}
            onKeyDown={(e) => e.key === "Enter" && setShowBox(true)}
        > 
            <div className="discount-img">
                   <p className="zoom-loop">ODBIERZ 10% ZNIŻKI</p> 
                   <i className="fa-solid fa-arrow-right-long arrow-in-right-corner" style={{fontSize: '22px'}}></i>
            </div>
         </div>

         {showBox && <DiscountBox onClose={() => setShowBox(false)} aria-live="polite"/>}
         </>
    )
}

export default Discount;
