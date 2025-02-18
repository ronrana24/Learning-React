import { useEffect, useState } from "react";
import LoadImages, { LoadImagesParams } from "./api";
import "./style.css";

export default function LoadMoreButton() {
  const URL =
    "https://api.unsplash.com/photos/?client_id=rHN-l4PLmGzVeCEW5ibB4UuVxXtjsG1ihwEIWg25V1w&";

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchImages = async () => {
    try {
      const loadImageParams: LoadImagesParams = {
        url: URL,
        page,
      };
      const images = await LoadImages(loadImageParams, setLoading);
      setData((prevData) => [...prevData, ...images]); // Corrected state update
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      await fetchImages();
    };
    loadImages();
  }, [page]);

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
    <div className="load-more-images-container">
      {data.length > 0 &&
        data.map((image: any, index: number) => (
          <div className="image-container" key={index}>
            <img src={image.urls.raw} alt={image.alt_description} />
            <span>{image.alt_description}</span>
          </div>
        ))}
      <button
        className="load-more-btn"
        onClick={() => setPage((prevPage) => prevPage + 1)}
      >
        Load More
      </button>
    </div>
  );
}
