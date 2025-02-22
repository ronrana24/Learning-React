import "./style.css";

interface SquareProps {
  value: string;
  onClick: () => void;
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
