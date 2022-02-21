import React from "react";
import HomeScreens from "../Screens/Home/Screens/HomeScreens";
import { Link } from "react-router-dom";
const Navigation = () => {
    // const navLinkStyle = { color: 'white' }
    return ( 
        <nav>
        <img src = "https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png" width = "80px" / >
        <ul className = 'nav-list'>
        <li className="nav-item" > <Link className="nav-link" > Lịch Khai giảng </Link></li >
        <li className="nav-item" > < a className="nav-link" href = "/design"> Đồ họa chuyên nghiệp </a></li>
        <li className="nav-item" > < a className="nav-link" href = "/short"> Khóa ngắn hạn </a></li>
        <li className="nav-item" > < a className="nav-link" href = "/long"> Khóa dài hạn </a></li>
        </ul>
 </nav>
    )
}
export default Navigation