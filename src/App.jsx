import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '@/redux/authentication/authenticationSlice';
import Router from "@/routing/Router"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  return (
      <Router />
  );
}

export default App;
