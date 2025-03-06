import { useRef, useState } from "react";
import "./style.css";

interface notification {
  id: number;
  name: string;
  title: string;
}

export default function TaskNotification() {
  const [notifications, setNotification] = useState<notification[]>([]);

  const timerRef = useRef({});

  const buttons = [
    { name: "success", title: "Success" },
    { name: "info", title: "Info" },
    { name: "warning", title: "Warning" },
    { name: "error", title: "Error" },
  ];

  const handleClick = (name: string, title: string) => {
    const id = new Date().getTime();
    setNotification((prev) => [...prev, { id, name, title }]);

    timerRef.current[id] = setTimeout(() => handleClose(id), 5 * 1000);
  };

  const handleClose = (id: number) => {
    if (timerRef.current[id]) {
      clearTimeout(timerRef.current[id]);
      delete timerRef.current[id]
    }
    setNotification((notifications) =>
      notifications.filter((not) => not.id != id)
    );
  };
  return (
    <>
      <div className="notifications-container">
        {notifications.map((notification) => (
          <div
            className={`notification-container ${notification.name}`}
            key={notification.id}
          >
            <p>{notification.title}</p>
            <button onClick={() => handleClose(notification.id)}>X</button>
          </div>
        ))}
      </div>
      <div className="button-notification-container">
        {buttons.map((button, index: number) => (
          <button
            onClick={() => handleClick(button.name, button.title)}
            className={`custom-button ${button.name}`}
            name={button.name}
            key={index}
          >
            {button.title}
          </button>
        ))}
      </div>
    </>
  );
}
