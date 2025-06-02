import React from "react";    
import '../css/index.css';  


const Footer = () => {
    return ( 
        <footer className="ui inverted vertical segment Copy-right" >
            <div className="ui container">
                <div className="ui stackable grid middle aligned">
                    <div className="four wide column"></div>
                    <div className="eight wide column center aligned">
                        <p className="Copy-right">© {new Date().getFullYear()} FlowMart. All rights reserved.</p>
                    </div>
                    <div className="four wide column right aligned">

                            <a href="https://www.instagram.com/jj99flex/"><i className="fa-brands fa-instagram look "></i></a>
                            <a href="https://www.facebook.com/jachimon.esang"><i className="fa-brands fa-facebook look" style={{marginLeft: '15px'}}></i></a>
                            <a href="#">
                   <i className="fa-solid fa-circle-arrow-up fixed-box" ></i>
                            </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
