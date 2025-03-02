import { useContext } from "react";
import UserContext from "../context/userContext";

export default function Profile() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <h3>Error: UserContext is not provided.</h3>;
  }
  const { user } = userContext;

  return (
    <div>
      {user?.username ? (
        <h3>Profile: {user.username}</h3>
      ) : (
        <h3>User not logged in.</h3>
      )}
    </div>
  );
}
