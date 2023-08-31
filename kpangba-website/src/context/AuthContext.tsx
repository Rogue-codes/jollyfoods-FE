"use client";
import { UserProps } from "@/interface";
import { logoutAuth } from "@/utils/api/auth";
import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  kpangba_user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [kpangba_user, setKpangba_user] = useState<UserProps | null>(
    typeof window !== "undefined" && localStorage.getItem("kpangba_user")
      ? JSON.parse(window.localStorage.getItem("kpangba_user")!)
      : null
  );

  const login = (user: UserProps) => {
    setKpangba_user(user);
    typeof window !== "undefined" &&
      localStorage.setItem("kpangba_user", JSON.stringify(user));
  };

  const logout = () => {
    setKpangba_user(null);
    typeof window !== "undefined" && localStorage.removeItem("kpangba_user");
    logoutAuth();
  };

  const contextValue: AuthContextType = {
    kpangba_user,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
