import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import ErrorPage from '@/components/ErrorPage';
import MainSlider from '@/components/content/Main_slider';
import DetailsCard from '@/pages/Details_page';

import Login from '@/components/content/Login';
import ComponentC from '@/components/content/ComponentC';



export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/parachutes",
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
          path: "/C",
          element: < ComponentC/>,
          children: []
        },
      ]},
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}
