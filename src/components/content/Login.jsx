import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '@/redux/authentication/authenticationSlice';
import { clearToken } from '@/redux/authentication/authenticationSlice';
import Loading_state from '@/components/Loading';
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { token, user, isLoading } = useSelector((store) => store.login);
  const [username, setUsername] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = username;
    const resultAction = await dispatch(getLogin({ user, token }));
    if (resultAction.payload !== undefined) {
      localStorage.setItem('token', resultAction.payload.token);
    } else if (resultAction.error) {
      setLoginError(resultAction.error.message);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(clearToken());
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <div className="flex flex-col items-center justify-center h-[85vh] bg-gray-100">
      {token === null && (
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
          </div>
        </form>
        {loginError && (
          <div className="text-red-500 text-center text-xs">{loginError}</div>
        )}
        <p className="text-center text-gray-500 text-xs">
          (Default username: username1)
        </p>
      </div>
      )}
      {token !== null && (
        <div className="w-full max-w-xs">
          <h3 className="mb-4 text-center">You are logged in as: {user}</h3>
          <form onSubmit={handleLogout}>
            <div className="flex justify-center"> {/* Center the button horizontally */}
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Logout
              </button>
            </div>
          </form>
          <Link to="/" className="flex justify-center mt-4"> {/* Center the button horizontally */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Go to all parachutes
            </button>
          </Link>
        </div>
      )}
      {isLoading === true && (
        <Loading_state />
      )}
    </div>
  )
}

export default Login;
