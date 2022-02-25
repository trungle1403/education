import React,{useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import validateEmail from '../../utils/validateEmail';
import './Login.css'
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState({})
    const handleInput = (e) => {
        return e.target.value
    }
    const [validationMsg, setValidationMsg] = useState({})
    const [message, setMessage] = useState('')
    
    const getUser = () => {
        const userLogin = localStorage.getItem('userLogin')
        userLogin === null ? setUser([]) : setUser(JSON.parse(userLogin))
    }
    useEffect(() => {
        getUser()
    }, [])

    const handleSubmit = (e) => {  
        e.preventDefault();
        const msg = {}
        if (!validateEmail(email)) {
            msg.email = "Email không đúng định dạng"
            setValidationMsg(msg)
            return
        }
        if(Object.keys(user).length === 0 || email !== user.email || password !== user.password) {
            setValidationMsg({})
            setMessage('Đăng nhập thất bại')
            return
        }

        history.push('/')

    }
  return (
    <div className='container mt-3'>
        <form onSubmit={handleSubmit} className='form-login'>
            <h3 className='text-center'>Đăng nhập</h3>
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
            <div class="form-text text-danger font-weight-bold text-center mb-2">{message}</div>
            <button class="mt-2 btn btn-info ">Đăng kí</button>

            <div className="text-center m-5">
                <Link to="/signup">Tạo tài khoản mới!</Link>
            </div>
        </form>
    </div>
)}

export default Login