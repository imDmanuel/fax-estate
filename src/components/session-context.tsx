"use client";

import { SessionData } from "@/lib/types";
import React, { useState } from "react";

const UserContext = React.createContext<{
  user: SessionData["user"] | null;
  setUser: React.Dispatch<React.SetStateAction<SessionData["user"] | null>>;
}>({ user: null, setUser: function () {} });

export default function UserContextProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: SessionData | null;
}) {
  const [user, setUser] = useState(session?.user || null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => React.useContext(UserContext);
