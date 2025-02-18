import { useEffect, useState } from "react";
import Header from "../common/header";
import "./style.css";
import { apiCall } from "../server/api";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {};

  const fetchGithubUserData = async (username: string) => {
    const response = await apiCall({url: "", method: "GET", setLoading})
  }

  useEffect(() => {
    fetchGithubUserData(username)
  }, username);

  return (
    <div className="github-profile-container">
      <Header text="Github Profile" />
      <input
        name="search-by-username"
        type="text"
        value={username}
        placeholder="Enter Github username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}
