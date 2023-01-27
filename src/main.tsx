import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AdminPage from './pages/AdminPage';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import MyOrderPage from './pages/MyOrderPage';
import MyShopPage from './pages/MyShopPage';
import PaymentPage from './pages/PaymentPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
      },
      {
        path: '/myorder/:orderStatus',
        element: <MyOrderPage />,
      },
      {
        path: '/category/:keyword',
        element: <CategoryPage />,
      },
      {
        path: '/myshop',
        element: <MyShopPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/admin/:productsStatus',
        element: <AdminPage />,
      },
      {
        path: '/payment',
        element: <PaymentPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
