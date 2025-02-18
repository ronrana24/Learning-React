import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QrCode() {
  const [text, setText] = useState<string>("");
  const [qrCode, setQrCode] = useState<string>("");

  const handleGenerateQrCode = () => {
    setQrCode(text);
    setText("");
  };

  return (
    <div className="qr-code-container">
      <h1 className="title">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text here"
        name="qr-code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-field"
        aria-label="QR Code Input"
      />
      <button
        disabled={!text.trim()}
        onClick={handleGenerateQrCode}
        className="generate-btn"
      >
        Generate
      </button>
      <div className="qr-code-output">
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}
