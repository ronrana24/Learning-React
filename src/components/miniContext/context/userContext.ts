import React from "react";

export interface User {
  username: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;
