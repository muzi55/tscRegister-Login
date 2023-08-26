import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "./setCookie";
import Register from "./components/Register";
import Login from "./components/Login";

export interface Inputs {
  email: string;
  password: string;
}

export interface UserData {
  isDelete: boolean;
  email: string;
  password: string;
}
function App() {
  return (
    <>
      <Register />
      <hr />
      <Login />
    </>
  );
}

export default App;
