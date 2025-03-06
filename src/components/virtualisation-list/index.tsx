import { useState, useMemo, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import "./style.css";

const ITEM_HEIGHT = 340;
const VIEWPORT_HEIGHT = 520;
const BUFFER_ITEMS = 3; // Extra items to render before/after viewport

export default function ListVirtualization() {
  const [scrollTop, setScrollTop] = useState(0);
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const recipes = data?.recipes || [];

  const { startIndex, endIndex } = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_ITEMS);
    const endIndex = Math.min(
      recipes.length,
      Math.floor((scrollTop + VIEWPORT_HEIGHT) / ITEM_HEIGHT) + BUFFER_ITEMS
    );
    return { startIndex, endIndex };
  }, [scrollTop, recipes]);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error loading data.</p>;
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <div className="list-virtualization-container">
      <h1 className="list-title">Virtualized Recipe List</h1>
      <div className="recipe-list" onScroll={handleScroll}>
        {recipes.slice(startIndex, endIndex).map((recipe) => (
          <Card ingredients={recipe.ingredients} name={recipe.name} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}
