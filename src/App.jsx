import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '@/redux/authentication/authenticationSlice';
import Router from "@/routing/Router"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  return (
      <Router />
  );
}

export default App;
