import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Authentication/Login";
import { Register } from "./Authentication/Register";
import { TodoList } from "./Todos/TodoList";
export const Layout = () => {
  return (
    <>
      <div
        style={{
          background: "url(/Images/background.jpeg)",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",

          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <>
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/todo" element={<TodoList />} />
            </Routes>
          </BrowserRouter>
        </>
      </div>
    </>
  );
};
