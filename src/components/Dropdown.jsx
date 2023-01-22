import React, {useState} from "react";
import "../style/style.scss";

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(true);
    // console.log(dropdown);
    return (
        <div className="down">
            <ul className={dropdown ? "mydropdown" : "mydropdown clicked"} onClick={()=>setDropdown(!dropdown)}> 
                <li><a onClick={()=>setDropdown(false)}>HISTORY</a></li>
                <li><a onClick={()=>setDropdown(false)}>VISSION MISSION</a></li>
            </ul>
        </div>
    )
}
export default Dropdown