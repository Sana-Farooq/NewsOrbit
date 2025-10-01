import { NavLink } from "react-router-dom";
import logoNewsOrbit from "../asset/logoNewsOrbit.png";

const NavBar = () => {
  const categories = ["Home", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logoNewsOrbit}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span className="fw-bold text-light">NewsOrbitNow</span>
        </div>
        <button
          className="navbar-toggler bg-light color-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {categories.map((category) => {
              const path = category.toLowerCase() === "home" ? "/" : `/${category.toLowerCase()}`;
              return (
                <li className="nav-item" key={category}>
                  <NavLink className="nav-link" to={path} end={category === "Home"}> 
                    {category}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
