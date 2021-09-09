import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100%",
  padding: "10px",
  background: "white",
  textDecoration: "none",
  color: "red",
};

export const Navigation = () => {
  return (
    <div className="navlink">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "#191d32",
          color: "white",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: "#191d32",
          color: "white",
        }}
      >
        About
      </NavLink>

      <NavLink
        to="/program"
        exact
        style={link}
        activeStyle={{
          background: "#191d32",
          color: "white",
        }}
      >
        Programs
      </NavLink>

      <NavLink
        to="/videos"
        exact
        style={link}
        activeStyle={{
          background: "#191d32",
          color: "white",
        }}
      >
        Video Library
      </NavLink>
    </div>
  );
};
