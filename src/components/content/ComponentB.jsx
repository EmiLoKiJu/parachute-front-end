import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '@/redux/authentication/authenticationSlice';
import { setToken, clearToken } from '@/redux/authentication/authenticationSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.login);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch, setToken]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = username;
  
    dispatch(getLogin({ user, token })).then((resultAction) => {
      if (resultAction.payload) {
        localStorage.setItem('token', resultAction.payload);
        navigate('/parachutes');
      } else {
        console.log('Login failed');
        console.log(token);
        // window.location.reload();
      }
    });
  }

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(clearToken());
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <div>
      {token === null && (
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <input type="submit" value="Login"/>
      </form>
      )}
      {token !== null && (
        <div>
          <h3>You are already logged in.</h3>
          <form onSubmit={handleLogout}>
            <input type="submit" value="Logout"/>
          </form>
        </div>
      )}
      <h3>(Deffault username: username1)</h3>
      <h3>(Deffault password: password1)</h3>
    </div>
  )
}

export default Login;
