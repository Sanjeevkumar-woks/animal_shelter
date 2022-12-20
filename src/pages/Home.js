import React from "react";
import "./pages.css";
import logo from "./logo.png";
import pet from "./pet.png";
import about from "./about-pet.png";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <header className="header" id="header">
        <NavBar />
      </header>
      <main className="main-content" id="main-content">
        <div className="adopt">
          <div className="about-details">
            <h2>Welcome to the Animal Shelter !</h2>
            <Typography>
              Glad that you care for the animals so much. We make sure that
              you'll not repent your decision of adopting your favorite per !!
            </Typography>
            <div className="btn">
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/adopt")}
              >
                Adopt
              </Button>
              <Button variant="outlined" onClick={() => navigate("/pets-list")}>
                What all pets do we have ?
              </Button>
            </div>
          </div>
          <div className="pets-img">
            <img className="pet-img" src={pet} alt="pets-img" />
          </div>
        </div>
        <div className="give-away">
          <h2>We do thake in pets if you can't care of them !</h2>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/give-away")}>
            Give Away
          </Button>
        </div>
        <div className="about">
          <div className="about-mg-container">
            <img className="about-img" src={about} alt="about-img" />
          </div>
          <div className="about-details">
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </Typography>
          </div>
        </div>
      </main>
      <footer className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-about">
            <div className="logo">
              <img className="logo-img" src={logo} alt="img" />
              <small>ANIMAL SHELTER</small>
            </div>
            <div className="about-details">
              <small>
                One of the best animal shelter places in india. we're recognized
                by government. Please take a pledge to take care of these lovely
                pets !
              </small>
              <br />
              <br />
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/adopt")}
              >
                Adopt →
              </Button>
            </div>
          </div>
          <div className="contact">
            <small>GET IN TOUCH</small>
            <div className="small-allign">
              <LocationOnOutlinedIcon />
              <small>
                llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                woiwemfwokm fwe w ecen cloenwo we - 355233
              </small>
            </div>
            <div className="small-allign">
              <EmailOutlinedIcon />
              <small>cisubdcusb@gmail.com</small>
            </div>
            <div className="follow">
              <small>FOllOW US</small>
              <div className="nav">
                <TwitterIcon />
                <FacebookOutlinedIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="quick-link">
            <small>QUICK LINKS</small>
            <Link underline="hover" variant="button" href="/#">
              Home
            </Link>
            <Link underline="hover" variant="button" href="#">
              Contact us
            </Link>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <div>
            <small>Copyright Ⓒ2023.Animal Shelter</small>
          </div>
          <div className="footer-nav">
            <Link underline="hover" color="lightgray">Privacy Policy</Link>
            <Link underline="hover" color="lightgray">Terms of Service</Link>
            <Link underline="hover" color="lightgray">Cookes settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
