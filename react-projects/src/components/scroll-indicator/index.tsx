import { useEffect, useState } from "react";
import { apiCall } from "../server/api";
import "./style.css";

export default function ScrollIndicator({ url }: { url: string }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const fetchData = async (url: string) => {
    try {
      const result = await apiCall({
        url: url,
        method: "GET",
        setLoading,
      });

      if (result && result.products.length !== 0) {
        setData(result.products);
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    const scrolledSoFar: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height: number =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolledSoFar / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

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
    <div>
      <h1>Custom Scroll Indicator</h1>

      {/* Scroll progress bar container */}
      <div className="scroll-progress-tracking-container">
        <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}></div>
      </div>

      {/* Data Container */}
      <div className="data-container">
        {loading ? (
          <p>Loading data...</p> // Show loading message while fetching data
        ) : data.length !== 0 ? (
          data.map((item: any) => <p key={item.id}>{item.title}</p>) // Render data if available
        ) : (
          <p>No Data Available</p> // Fallback message if no data
        )}
      </div>
    </div>
  );
}
