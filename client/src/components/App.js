import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
// import LandingPage from "./views/LandingPage/LandingPage.js";
// import LoginPage from "./views/LoginPage/LoginPage.js";
// import RegisterPage from "./views/RegisterPage/RegisterPage.js";
// import NavBar from "./views/NavBar/NavBar";
// import Footer from "./views/Footer/Footer";

const LandingPage = React.lazy(() => import('./views/LandingPage/LandingPage.js'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage.js'));
const RegisterPage = React.lazy(() => import('./views/RegisterPage/RegisterPage.js'));
const NavBar = React.lazy(() => import('./views/NavBar/NavBar.js'));
const Footer = React.lazy(() => import('./views/Footer/Footer.js'));

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <section>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/"  element={<AuthLandingPage />}>
          </Route>
          <Route path="/login" element={<AuthLoginPage />}>
          </Route>
          <Route path="/register" element={<AuthRegisterPage />}>
          </Route>
        </Routes>
      </div>
      <Footer />
      </section>
    </Suspense>
  );
}

export default App;