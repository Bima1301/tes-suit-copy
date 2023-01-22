import React from "react";
import "../style/style.scss";
import facebook from '../assets/icon/facebook-official.png'
import twitter from '../assets/icon/twitter.png'

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center flex-column w-100 gap-2">
            <small>Copyright &#169; 2016. PT Company</small>
            <div className="d-flex flex-row gap-4">
            <img src={facebook} style={{ width:"18px" }} alt="" />
            <img src={twitter} style={{ width:"18px" }} alt="" />
            </div>
        </footer>
    )
}

export default Footer