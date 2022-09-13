import {usestate} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'


export const Login = () => {
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogin = () =>{
        auth.login(user)
        navigate('/')
    }
  return (
    <div>
        <label>
            Username:{''}
            <input type='text' onChange={(e) => setUser(e.target.value)}></input>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
