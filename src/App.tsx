import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./layout/NavBar";
import store, { persistor } from "./store/index";

function RequireAuth({ children, redirectTo }: any) {
  const token = useSelector(
    (state: RootStateOrAny) => state.TokenReducer.token
  );
  return token ? children : <Navigate to={redirectTo} />;
}

function NoAuth({ children, redirectTo }: any) {
  const token = useSelector(
    (state: RootStateOrAny) => state.TokenReducer.token
  );
  return !token ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavBar />
          <div className="content-page">
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth redirectTo="/login">
                    <HomePage />
                  </RequireAuth>
                }
              />
              <Route
                path="/login"
                element={
                  <NoAuth redirectTo="/">
                    <LoginPage />
                  </NoAuth>
                }
              />
              <Route
                path="/register"
                element={
                  <NoAuth redirectTo="/">
                    <RegisterPage />
                  </NoAuth>
                }
              />
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
