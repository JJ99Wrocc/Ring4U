import React from "react";
import { Link } from "react-router-dom";

const PaymentNavbar = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Kliknięto Zakupy");
    };

    return (
        <nav id="nav" className="ui raised very padded segment">
            <a className="ui header" style={{ display: 'flex', justifyContent: 'center', color: '#f2711c', fontSize: '40px' }}>
                flowmart
            </a>
            <div className="ui right floated header">
                <Link to="/payment" className="look">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                {/* <a className="look" style={{ marginLeft: '20px' }} href="/search"><i className="fa-solid fa-magnifying-glass"></i></a> */}
                {/* <a className="look" style={{ marginLeft: '20px' }} href="/login"><i className="fa-regular fa-user"></i></a> */}
            </div>
            <div className="ui left floated header">
                <a style={{ marginRight: '20px' }} className='look' href="/">Kontynuuj zakupy</a>
              
            </div>
        </nav>
    );
};

export default PaymentNavbar;
