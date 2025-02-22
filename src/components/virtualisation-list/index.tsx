import { useState } from "react";
import Header from "../common/header";
import useFetch from "../hooks/useFetch";
import "./style.css";

export default function VirtualizedList() {
  const URL = "https://dummyjson.com/recipes";
  const { data, error, loading } = useFetch(URL);

//   const [index, setIndex] = useState([0, Math.floor(height/itemHeight)]) 400/

  if (loading) {
    return (
      <div className="loading-spinner">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className="error-message">{error.message}</p>;
  }

  return (
    <div className="virtualized-list-container">
      <Header text="Virtualization List" />
      <div className="list-container">
        <div className="list-items">
          {data && data.recipes.length > 0 ? (
            data.recipes.map((item: any) => (
              <div key={item.id} className="list-item">
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
