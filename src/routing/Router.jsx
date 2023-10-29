import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import ErrorPage from '@/components/ErrorPage';
import ComponentA from '@/components/content/ComponentA';
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
          element: < ComponentA/>,
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
      ]
    },
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}
