import { IconButton, Link } from "@mui/material";
import React, { useState } from "react";
import logo from "./logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuToggle = () => setMenuOpen(!menuOpen);
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <img className="logo-img" src={logo} alt="img" />
          <small>ANIMAL SHELTER</small>
        </div>
        <div className="nav navbar">
          <Link underline="hover" color="black" variant="button" href="#">
            Home
          </Link>
          <Link underline="hover" color="black" variant="button" href="#">
            Contact us
          </Link>
        </div>
        <div className="socail-connect">
          <LinkedInIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <div
          className={menuOpen ? "nav-menu open-menu" : "nav-menu close-menu"}
        >
          <IconButton onClick={menuToggle}>
            {menuOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      </nav>
    </div>
  );
}
