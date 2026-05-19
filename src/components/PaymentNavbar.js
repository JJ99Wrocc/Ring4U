import React from "react";
import { Link } from "react-router-dom";

const PaymentNavbar = () => {
    return (
        <nav 
            id="nav" 
            className="ui raised very padded segment" 
            role="navigation" 
            aria-label="Nawigacja sklepu Flowmart"
        >
            <a 
                className="ui header" 
                style={{ display: 'flex', justifyContent: 'center', color: '#f2711c', fontSize: '40px' }}
                href="/" 
                aria-label="Strona główna Flowmart"
            >
                flowmart
            </a>

            <div className="ui right floated header">
                <Link 
                    to="/payment" 
                    className="look" 
                    aria-label="Przejdź do koszyka"
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                {/* <a className="look" style={{ marginLeft: '20px' }} href="/search" aria-label="Wyszukaj produkty"><i className="fa-solid fa-magnifying-glass"></i></a> */}
                {/* <a className="look" style={{ marginLeft: '20px' }} href="/login" aria-label="Zaloguj się"><i className="fa-regular fa-user"></i></a> */}
            </div>

            <div className="ui left floated header">
                <a 
                    style={{ marginRight: '20px' }} 
                    className='look' 
                    href="/" 
                    aria-label="Kontynuuj zakupy"
                >
                    Kontynuuj zakupy
                </a>
            </div>
        </nav>
    );
};

export default PaymentNavbar;
