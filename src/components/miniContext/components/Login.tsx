import { useState, useContext } from "react";
import UserContext from "../context/userContext";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userContext = useContext(UserContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    userContext?.setUser({ username, password });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button name="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  );
}
