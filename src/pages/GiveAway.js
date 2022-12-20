import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./forms.css";

export default function GiveAway() {
  const initialValues = {
    petType: "",
    breed: "",
    username: "",
    email: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.petType) {
      errors.petType = "PetType is required!";
    }
    if (!values.breed) {
      errors.breed = "Breed is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (values.phone.length < 4) {
      errors.phone = "Phone must be more than 4 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="heading">
          <h3>Give Away</h3>
          <div className="close">
            <IconButton
              aria-label="detele"
              color="primary"
              onClick={() => navigate("/")}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <p>What Pet do you want to Give Away ? </p>
        <div className="field">
          <label>
            Pet type <small className="error">*</small>
          </label>
          <select
            name="petType"
            value={formValues.petType}
            onChange={handleChange}
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Birds">Birds</option>
            <option value="Fish">Fish</option>
          </select>
        </div>
        <small className="error">{formErrors.petType}</small>
        <div className="field">
          <label>
            Breed <small className="error">*</small>
          </label>
          <select name="breed" value={formValues.breed} onChange={handleChange}>
            <option value="Larab">Labra</option>
            <option value="german">German</option>
            <option value="Daberman">Daberman</option>
          </select>
        </div>
        <small className="error">{formErrors.breed}</small>
        <p>Please fill the below details </p>
        <div className="field">
          <label>
            Username <small className="error">*</small>
          </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <small className="error">{formErrors.username}</small>
        <div className="field">
          <label>
            Email<small className="error">*</small>
          </label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <small className="error">{formErrors.email}</small>
        <div className="field">
          <label>
            Phone <small className="error">*</small>
          </label>
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <small className="error">{formErrors.phone}</small>
        <div className="button">
          <Button
            className="submit"
            type="submit"
            variant="outlined"
            color="error"
          >
            Request for pet Adoption
          </Button>
        </div>
      </form>
    </div>
  );
}
