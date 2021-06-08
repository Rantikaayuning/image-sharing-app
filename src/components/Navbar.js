import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/web-logo.png";

const Navbar = () => {
  const [favorite, setFavorite] = useState(null);
  
  useEffect(() => {
    if (localStorage.getItem("favorite")) {
      setFavorite(JSON.parse(localStorage.getItem("favorite")));
    }
  }, []);

  //SEARCH
  // const [search, setSearch] = useState(value)

  // const handleChange = (e) => {
  //   setSearch(e.target.value)
  // }
  
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   getSearch(search)
  // }

  return (
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "black", position: "sticky", zIndex: 1, top: 0 }}
    >
      <div className="container-fluid">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt=""
              width="30"
              height="28"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
        <Link to="/favorite" style={{ color: "black", textDecoration: "none" }}>
          <button type="button" className="btn btn-outline-warning">
            <i class="bi bi-heart"></i>
            <span className="badge">{favorite && favorite.length}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
