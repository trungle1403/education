import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    return ( 
        <nav>
        <img src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png" width = "80px" alt='imagelogo' />
        <ul className='nav-list'>
            <li className="nav-item" > 
                <Link to='' className="nav-link"> Trang chủ </Link>
            </li>
            <li className="nav-item" > 
                <Link to='/lich-khai-giang' className="nav-link"> Lịch Khai giảng </Link></li >
            <li className="nav-item" > 
                <Link to='/do-hoa' className="nav-link"> Đồ họa chuyên nghiệp </Link>
            </li>
            <li className="nav-item" > 
                <Link to='/khoa-ngan-han' className="nav-link"> Khóa ngắn hạn </Link>
            </li>
            <li className="nav-item" > 
                <Link to='/khoa-dai-han' className="nav-link" > Khóa dài hạn </Link>
            </li>
        </ul>
 </nav>
    )
}
export default Navigation