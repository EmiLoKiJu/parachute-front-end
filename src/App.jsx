import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '@/redux/authentication/authenticationSlice';
import { getParachutes } from "@/redux/parachutes/parachutesSlice";
import Router from "@/routing/Router"

function App() {
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');
  const { token } = useSelector((store) => store.login)
  const { parachutes } = useSelector((store) => store.parachutes)

  useEffect(() => {
    console.log(storedToken);
    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(setUser(storedUser));
    }
  }, [dispatch, storedToken, storedUser]);

  useEffect(() => {
    if (token && parachutes.length == 0) {
      dispatch(getParachutes(token));
    }
  }, [dispatch, token, parachutes]);

  return (
      <Router />
  );
}

export default App;
