import "./style.css";

interface HeaderProps {
  text: string;
  className?: string; // Optional className prop for additional styling
}

export default function Header({ text, className }: HeaderProps) {
    return <h1 className={`header ${className}`}>{text}</h1>;
}
