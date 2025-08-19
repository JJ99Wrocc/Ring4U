    import React from "react";
    import { Link } from "react-router-dom";
    import { signOut} from "firebase/auth";
    import { auth } from "../Firebase";
    const LogInPreview = ({ show, setShow }) => {

        const uid = auth.currentUser.uid;
console.log(uid); 
    return (
        <div  className="log"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        
        >
        <Link to="/login" className="look">
            <i className="fa-solid fa-user "></i>
        </Link> 
        {show && (
            <div
            className="Navbar-squeres"
            style={{
                width: "170px",
                height: "110px",
                left: "-100px",
                top: "40px",
            }}
            >
            <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
    
                <li className="custom-link">
                <Link to="/my-orders">Moje zamówienia</Link>
                </li>
                <li className="custom-link">
                <Link to="/my-dm">Moje wiadomości</Link>
                </li>
                <li className="custom-link"
                onClick={() => signOut(auth)}>
                Wyloguj
                </li>
            </ul>
            </div>
        )}
        </div>
    );
    };

    export default LogInPreview;
