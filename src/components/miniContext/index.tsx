import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider";

export default function MiniContext() {
  return <UserContextProvider>
    <h1>React Context API</h1>
    <Login />
    <Profile />
  </UserContextProvider>;
}
