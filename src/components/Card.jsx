import React from "react";
import "../style/style.scss";

const Card = ({title = "", icon = "", des ="", ...props}) => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mycard col-md-3 mx-lg-0 mx-2" {...props}>
            <img className="py-3 mt-3" style={{ width:"30px", height:"60px" }} src={icon} alt="" />
            <h5 style={{ fontWeight:"700" }}>{title}</h5>
            <p className="text-center" >{des}</p>
        </div>
    )
}
export default Card