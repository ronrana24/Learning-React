import { useEffect, useState } from "react";
import GetImages from "./api";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface ImageSliderProps {
  url: string;
  limit: number;
}

export default function ImageSlider({ url, limit = 5 }: ImageSliderProps) {
  const [image, setImages] = useState<unknown[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fecthImages = async () => {
      try {
        const data = await GetImages(`${url}${limit}`, setLoading);
        setImages(data);
      } catch (error: any) {
        setError(error);
      }
    };

    fecthImages();
  }, [url]);

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

  const handlePreviousImage = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };

  const handleNextImage = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 1 : currentSlide + 1);
  };

  return (
    <div className="image-container">
      <BsArrowLeftCircleFill
        onClick={handlePreviousImage}
        className="arrow arrow-left"
      />

      {/* Render images */}
      {image && image.length > 0
        ? image.map((imageData: any, index: number) => (
            <img
              alt={imageData.alt_description}
              key={imageData.id}
              src={imageData.urls.raw} // Make sure to add the correct src
              className={
                currentSlide === index + 1
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNextImage}
        className="arrow arrow-right"
      />

      {/* Render circle indicators */}
      <span className="circle-indicators">
        {image && image.length > 0
          ? image.map((_, index) => (
              <button
                key={index}
                className="current-indicator"
                // Add your onClick functionality here
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
