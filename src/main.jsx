import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home/index.jsx';
import Error from './routes/Error/index.jsx';
import Product from './routes/Product/index.jsx';
import ViewProduct from './routes/ViewProduct/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/product/:id',
        element: <ViewProduct />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
