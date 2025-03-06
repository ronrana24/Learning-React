import { useRef, useState } from "react";
import "./style.css";

const OTP_SIZE = 6;

export default function OTP() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_SIZE).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only allow one digit
    setOtp(newOtp);

    // Move focus to next input field if available
    if (value && index < OTP_SIZE - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && otp.join("").length === OTP_SIZE) {
      alert("OTP completed");
    }
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // if (e.key)
  };

  return (
    <div className="otp-container">
      {Array.from({ length: OTP_SIZE }, (_, i) => (
        <input
          key={i}
          ref={(el: HTMLInputElement | null) => {
            inputRefs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="otp-box"
          value={otp[i]}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      ))}
    </div>
  );
}
