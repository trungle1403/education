import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    const [user, setUser] = React.useState({})

    const getUser = () => {
        const userLogin = localStorage.getItem('userLogin')
        userLogin === null ? setUser({}) : setUser(JSON.parse(userLogin))
    }
    const handleLogout = () => {
        localStorage.removeItem('userLogin')
        setUser({})
    }
    React.useEffect(() => {
        getUser()
    }, [])
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
        <div className="nav-login">
            {Object.keys(user).length === 0 ?  
            <Link className="btn-info btn" to='/login'> Đăng kí/Đăng nhập</Link> : 
                <div onClick={handleLogout} className="btn-logout btn-success btn" title="Logout">Xin chào {user.name}</div>}
        </div>
 </nav>
    )
}
export default Navigation