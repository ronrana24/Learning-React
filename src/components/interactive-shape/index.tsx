import { useEffect, useRef, useState } from "react";
import "./style.css";

export default function InteractiveShape() {
  const shape: number[][] = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  const totalLength = 9;
  const [grid, setGrid] = useState<number[][]>(shape);
  const refs = useRef<number[][]>([]);

  const handleClick = (key: string, flag: number = 2) => {
    const [i, j] = key.split("-").map(Number);

    if (flag === 2 && grid[i][j] === 2) {
      return;
    }

    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === i && colIndex === j ? flag : cell
        )
      );
      return newGrid;
    });
    if (flag === 2) {
      refs.current.push([i, j]);
    }
  };

  useEffect(() => {
    if (refs.current.length === totalLength) {
      refs.current.forEach(([i, j]: number[], index: number) => {
        setTimeout(() => handleClick(`${i}-${j}`, 1), (index + 1) * 1000);
      });
      refs.current = [];
    }
  }, [grid]);

  return (
    <div className="interactive-shape-container">
      {grid.map((row: number[], i: number) => (
        <div className="row-block" key={i}>
          {row.map((block: number, j: number) =>
            block === 1 ? (
              <div
                className="block"
                key={`${i}-${j}`}
                onClick={() => handleClick(`${i}-${j}`)}
              ></div>
            ) : block === 2 ? (
              <div
                className="block filled"
                key={`${i}-${j}`}
                onClick={() => handleClick(`${i}-${j}`)}
              ></div>
            ) : (
              <div className="empty-block " key={`${i}-${j}`}></div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
