"use client";
import { UserProps } from "@/interface";
import { logoutAuth } from "@/utils/api/auth";
import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  kpangba_user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
  handleIncrement: (type:string) => void
  handleDecrement: (type:string) => void
  child: number;
  adult: number;
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

  const [adult, setAdult] = useState<number>(1);
  const [child, setChildren] = useState<number>(0);

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

  const handleIncrement = (type: string) => {
    type === "adult"
      ? setAdult((prev) => prev + 1)
      : setChildren((prev) => prev + 1);
  };

  const handleDecrement = (type: string) => {
    type === "adult"
      ? setAdult((prev) => prev > 1 ? prev - 1 : 1)
      : setChildren((prev) => prev > 0 ? prev - 1 : 0);
  };

  const contextValue: AuthContextType = {
    kpangba_user,
    login,
    logout,
    child,
    adult,
    handleIncrement,
    handleDecrement
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
