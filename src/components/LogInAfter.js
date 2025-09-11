import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const LogInPreview = ({ show, setShow }) => {
    const uid = auth.currentUser.uid;
    console.log(uid); 

    return (
        <div
            className="log"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            aria-haspopup="true"
            aria-expanded={show}
        >
            <Link to="/login" className="look" aria-label="Przejdź do logowania">
                <i className="fa-solid fa-user "></i>
            </Link>

            {show && (
                <div
                    className="Navbar-squeres after-log-in"
                    style={{
                        width: "170px",
                        height: "150px",
                        left: "-100px",
                        top: "40px",
                    }}
                    role="menu"
                    aria-label="Menu użytkownika"
                >
                    <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
                        <li className="custom-link" role="menuitem">
                            <Link to="/my-orders">Moje zamówienia</Link>
                        </li>
                        <li className="custom-link" role="menuitem">
                            <Link to="/my-dm">Moje wiadomości</Link>
                        </li>
                        <li
                            className="custom-link"
                            role="menuitem"
                            onClick={() => signOut(auth)}
                        >
                            Wyloguj
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LogInPreview;
