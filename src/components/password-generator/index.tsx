import { useRef, useState } from "react";
import Header from "../common/header";
import "./style.css";

export default function PasswordGenarator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState<boolean>(false);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const generatePassword = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = letters;
    if (numberAllowed) characters += numbers;
    if (specialCharAllowed) characters += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="password-generator-container">
      <Header text="Password Generator" />
      <div className="password-input-container">
        <input
          readOnly
          type="text"
          value={password}
          name="password"
          placeholder="Generated Password"
          ref={passwordRef}
        />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div className="controls">
        <label className="length-control">
          <span>Password Length: {length}</span>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>

        <label className="checkbox-control">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          Include Numbers
        </label>

        <label className="checkbox-control">
          <input
            type="checkbox"
            checked={specialCharAllowed}
            onChange={() => setSpecialCharAllowed(!specialCharAllowed)}
          />
          Include Special Characters
        </label>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}
