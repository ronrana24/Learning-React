import useLocalStorage from "./useLocalStorage";
import "./style.css";

export default function LightDarkMode() {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "light");

  const handleToggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={currentTheme}>
      <div className="ligh-dark-container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>
          {currentTheme === "light" ? "Change to Dark" : "Change to Light"}
        </button>
      </div>
    </div>
  );
}
