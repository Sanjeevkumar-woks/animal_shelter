import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./forms.css";

const Dogs = [
  { id: 1, name: "Lyka", breed: "Dasch", age: 12 },
  { id: 2, name: "Albie", breed: "Beagle", age: 3 },
  { id: 4, name: "Happy", breed: "lab", age: 5 },
  { id: 5, name: "Ramu", breed: "Golden Retriver", age: 6 },
  { id: 6, name: "Pinky", breed: "Lab", age: 7 },
  { id: 7, name: "Sweetie", breed: "Beagle", age: 21 },
  { id: 8, name: "Blacky", breed: "Dasch", age: 11 },
];
const Cats = [
  { id: 1, name: "Lyka", breed: "Dasch", age: 15 },
  { id: 2, name: "Albie", breed: "Beagle", age: 3 },
  { id: 4, name: "Happy", breed: "lab", age: 5 },
  { id: 5, name: "Ramu", breed: "Golden Retriver", age: 6 },
  { id: 6, name: "Pinky", breed: "Lab", age: 7 },
  { id: 7, name: "Sweetie", breed: "Beagle", age: 21 },
  { id: 8, name: "Blacky", breed: "Dasch", age: 11 },
];

export default function PetsList() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  return (
    <div className="Table-container">
      <div className="heading">
        <h3>What all pets do we have?</h3>
        <div className="close-pets">
          <IconButton
            aria-label="close"
            color="primary"
            onClick={() => navigate("/")}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <Button
        color={selected === "Dogs" ? "success" : "primary"}
        onClick={() => setSelected("Dogs")}
      >
        DOGS
      </Button>
      |
      <Button
        color={selected === "Cats" ? "success" : "primary"}
        onClick={() => setSelected("Cats")}
      >
        CATS
      </Button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Age(months)</th>
          </tr>
        </thead>
        <tbody>
          {selected === "Cats"
            ? Cats.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.breed}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            : Dogs.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.breed}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
