import React, { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/auth";
import Cookies from "js-cookie";

const App = () => {
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  const fetchUser = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const user = await res.json();
      console.log(user);
      dispatch(setUser(user));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <AppBar />
      <Outlet />

      <br />
    </>
  );
};
9;
export default App;
