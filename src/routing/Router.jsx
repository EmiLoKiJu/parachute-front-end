import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import ErrorPage from '@/components/ErrorPage';
import MainSlider from '@/components/content/Main_slider';
import DetailsCard from '@/pages/Details_page';

import ComponentB from '@/components/content/ComponentB';
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
          path: "/B",
          element: < ComponentB/>,
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
