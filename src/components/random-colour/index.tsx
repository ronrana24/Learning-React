import { useState } from "react";
import "./style.css"

export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState<string>("hex");
  const [colour, setColour] = useState("#000000");

  const generateRGBColor = () => {
    const r: number = Math.floor(Math.random() * 256);
    const g: number = Math.floor(Math.random() * 256);
    const b: number = Math.floor(Math.random() * 256);

    setColour(`rgb(${r}, ${g}, ${b})`);
    setTypeOfColour("rgb");
  };

  const generateHexColor = () => {
    const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColour(hex);
    setTypeOfColour("hex");
  };

  const generateRandomColor = () => {
    const num: number = Math.floor(Math.random() * 10);

    if (num % 2 === 0) {
        generateHexColor();
    } else {
        generateRGBColor();
    }
  }

  return (
    <div className="container" style={{ backgroundColor: colour }}>
      <div className="color-display">
        <h2>Current {typeOfColour.toUpperCase()} Colour:</h2>
        <h1>{colour}</h1>
      </div>
      <div className="btn-group">
        <button onClick={generateHexColor}>Generate Hex Colour</button>
        <button onClick={generateRGBColor}>Generate RGB Colour</button>
        <button onClick={generateRandomColor}>Generate Random Colour</button>
      </div>
    </div>
  );
}
