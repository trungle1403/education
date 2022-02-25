import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import validateEmail from '../../utils/validateEmail';
const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validationMsg, setValidationMsg] = useState({})

    const handleInput = (e) => {
        return e.target.value
    }
    const handleSubmit = (e) => {   
        e.preventDefault();
        const msg = {}

        if (phone.length !== 10) {
            msg.phone = "Số điện thoại phải có 10 số"
        }
        if (!validateEmail(email)) {
            msg.email = "Email không đúng định dạng"
        }
        if (password.length < 8) {
            msg.password = "Password tối thiểu 8 kí tự"
        }
        setValidationMsg(msg)

        if (Object.keys(msg).length > 0) return
        const obj = {}
        obj.name = name
        obj.phone = phone
        obj.email = email
        obj.password = password
        localStorage.setItem("userLogin",JSON.stringify(obj))

        history.push('/login')

    }
    
    return (
    <div className='container mt-3'>
        <form onSubmit={handleSubmit} className='form-login'>
            <h3 className='text-center'>Đăng kí</h3>
            <div className="m-3">
                <label className="mb-2 font-weight-bold">Họ tên</label>
                <input required value={name} onChange={(e) => setName(handleInput(e))} type="text" class="form-control" />
            </div>
            <div className="m-3">
                <label className="mb-2 font-weight-bold">Số điện thoại</label>
                <input required value={phone} onChange={(e) => setPhone(handleInput(e))} type="number" class="form-control" />
                <div class="form-text text-danger">{validationMsg.phone}</div> 
            </div>
            <div className="m-3">
                <label className="mb-2 font-weight-bold">Email</label>
                <input required value={email} onChange={(e) => setEmail(handleInput(e))} type="text" class="form-control" />
                <div class="form-text text-danger">{validationMsg.email}</div>
            </div>

            <div className="m-3">
                <label className="mb-2 font-weight-bold">Password</label>
                <input required value={password} onChange={(e) => setPassword(handleInput(e))} type="password" class="form-control" />
                <div class="form-text text-danger">{validationMsg.password}</div>
            </div>

                <button class="btn btn-info ">Đăng kí</button>

            <div className="text-center m-5">
                <Link to="/login">Đăng nhập</Link>
            </div>
        </form>
    </div>
)}

export default Signup