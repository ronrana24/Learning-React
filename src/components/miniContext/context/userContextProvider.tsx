import { useState } from "react";
import UserContext, { User } from "./userContext";

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
