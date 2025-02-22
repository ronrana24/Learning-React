import { useEffect, useState } from "react";
import { apiCall } from "../server/api";
import "./style.css";
import Header from "../common/header";

export default function SearchAutoComplete() {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any[]>([]);

  const fetchData = async (text: string) => {
    try {
      const response = await apiCall({
        url: `https://dummyjson.com/users/search?q=${text.toLowerCase()}`,
        method: "GET",
        setLoading,
      });
      setData(response && response.users.length !== 0 ? response.users : []);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    if (text.length > 2) {
      fetchData(text);
    }
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value)
    if (text.length <= 2) {
        setData([])
    }
  }

  if (loading === true) {
    return (
      <div className="loading-spinner">
        <p>Loading...</p>
      </div>
    );
  }

  if (error !== null) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="search-autocomplete-container">
      <Header text="Search Autocomplete" />
      <input
        type="text"
        placeholder="Enter here"
        name="search-autocomplete"
        value={text}
        onChange={(event) => handleTextChange(event)}
        className="search-input"
      />

      {/* Show suggestions dropdown */}
      {data.length > 0 && (
        <ul className="suggestions-list">
          {data.map((item) => (
            <li key={item.id} onClick={() => setText(`${item.firstName} ${item.lastName}`)}>
              {item.firstName} {item.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
