import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.tsx';
import TestRoute from './pages/TestRoute.tsx';
import NavBar from './components/NavBar.tsx';
import Nested from './pages/Nested.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const router = createBrowserRouter([
  {
    element: <TestRoute />,
    children: [
      {
        path: '/nested',
        element: <Nested />,
      },
    ],
  },
  {
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
