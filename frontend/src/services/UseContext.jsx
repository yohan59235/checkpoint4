/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
    nickname: localStorage.getItem("nickname"),
  });

  useEffect(() => {
    localStorage.setItem("id", user.id);
    localStorage.setItem("email", user.email);
    localStorage.setItem("nickname", user.nickname);
  }, [user]);

  const props = useMemo(
    () => ({
      user,
      setUser,
      userId,
      setUserId,
    }),
    [user]
  );

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export default UserContext;
