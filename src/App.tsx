import Accordian from "./components/accordian";
import LightDarkMode from "./components/light-dark-mode";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PasswordGenarator from "./components/password-generator";
import RandomColour from "./components/random-colour";
import TicTacToe from "./components/tic-tac-toe";
import "./styles/style.css";
import CurrencyConvertor from "./components/currency-convertor";
import QrCode from "./components/qr-code";
import MiniContext from "./components/miniContext";
import Todo from "./components/todo";
import ListVirtualization from "./components/virtualisation-list";
import TaskNotification from "./components/task-notification";
import OTP from "./components/otp";
import InteractiveShape from "./components/interactive-shape";

const projects: { [key: string]: any } = {
  "Password Generator": PasswordGenarator,
  "Background Change": RandomColour,
  "Light and Dark Theme": LightDarkMode,
  Accordion: Accordian,
  "Tic Tac Toe": TicTacToe,
  "Currency Convertor": CurrencyConvertor,
  "QR Generator": QrCode,
  "Mini Context": MiniContext,
  Todo: Todo,
  "List Virtualization": ListVirtualization,
  "Toast Notification": TaskNotification,
  Otp: OTP,
  "Interactive Shape": InteractiveShape,
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        {Object.entries(projects).map(([name, Component]) => (
          <Route
            key={name}
            path={`/${name.toLowerCase().replace(/ /g, "-")}`}
            element={<Component />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
