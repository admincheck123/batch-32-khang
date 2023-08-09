import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


// import CartEmployeePage from 'pages/cartEmployee';
// import CartManagerPage from 'pages/cartManager';
import HomePage from 'pages/home';
import ImagePage from 'pages/image';
import LoginPage from 'pages/login';
// import PlayListPage from 'pages/playList';
import ProductListPage from 'pages/products';
import DemoPage from 'pages/demo';
import TodoPage from 'pages/todo';

import ButtonAccordions from 'componets/buttonAccordions';
import Form from 'componets/form';
import AuthLayout from 'componets/layout/auth';
import RegisterPage from 'pages/register';
import NonAuthLayout from 'componets/layout/nonAuth';
import { axiosClient } from 'helper/axiosClient';
import { DEFAULT, LOCATION } from 'constants/index';


import './App.css';
import NotFoundPage from 'pages/404';


function App() { // = Home Page

  const navigate = useNavigate();

  const token = window.localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATION.LOGIN);
    }
  }, [navigate, token]);


  return (
    <>
      {
        !token ? (
          <Routes>
            <Route path="/" element={<NonAuthLayout />} >
              <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
              <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
            </Route>
          </Routes>
        ) : (

      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<HomePage />} />
          <Route path={LOCATION.IMAGE} element={<ImagePage />} />
          <Route path={LOCATION.PRODUCT} element={<ProductListPage />} />
          {/* <Route path="play-list" element={<PlayListPage />} /> */}
          {/* <Route path="cart-employee" element={<CartEmployeePage />} /> */}
          {/* <Route path="cart-manager" element={<CartManagerPage />} /> */}
          <Route path={LOCATION.BUTTONACCORDION} element={<ButtonAccordions />} />
          <Route path={LOCATION.FORM} element={<Form />} />
          <Route path={LOCATION.DEMO} element={<DemoPage />} />
          <Route path={LOCATION.TODO} element={<TodoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
      </Routes>
        )
}
      {/* <div className="App">
        <AuthLayout
          headerTitle="Xin chào, đây là header!"
        >
          <main className="container">
            Đã đăng nhập
          </main>
        </AuthLayout>

        <NonAuthLayout
          footerTitle="Xin chào, đây là footer!"
        >
          <main className="container">
            Chưa đăng nhập
          </main>
        </NonAuthLayout>
      </div> */}
    </>
  );
};

export default App;