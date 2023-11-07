import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import ErrorPage from '@/components/ErrorPage';
import MainSlider from '@/components/content/Main_slider';
import DetailsCard from '@/pages/Details_page';
import ComponentC from '@/components/content/ComponentC.jsx'
import Login from '@/components/content/Login';
import AddParachute from '@/components/Add_parachute';



export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: < MainSlider/>,
          children: []
        },
        {
          path: "/parachutes/:id",
          element: <DetailsCard/>,
          children: []
        },
        {
          path: "/login",
          element: < Login/>,
          children: []
        },
        {
          path: "/newParachute",
          element: < AddParachute />,
          children: []
        },
        {
          path: "/reserveParachute",
          element: < ComponentC title="Reserve Parachute" />,
          children: []
        },
        {
          path: "/myreservations",
          element: < ComponentC title="My Reservations" />,
          children: []
        },
        {
          path: "/deleteParachute",
          element: < ComponentC title="Delete Parachute" />,
          children: []
        },
      ]},
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}
