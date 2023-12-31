"use client";
import { LocationType, OptionType, UserProps } from "@/interface";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { logoutAuth } from "@/utils/api/auth";
import { formatTime } from "@/utils/time";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface AuthContextType {
  kpangba_user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
  handleIncrement: (type: string) => void;
  handleDecrement: (type: string) => void;
  child: number;
  adult: number;
  reservationDate: Date | null;
  setReservationDate: Dispatch<SetStateAction<Date | null>>;
  reservationTime: string;
  handleTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  OptionsArr: OptionType[] | undefined;
  location: OptionType | null;
  setLocation: Dispatch<SetStateAction<OptionType | null>>;
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
  const [reservationDate, setReservationDate] = useState<Date | null>(null);
  const [locations, setLocations] = useState<LocationType[] | null>(
    typeof window !== "undefined" && localStorage.getItem("jolly_location")
      ? JSON.parse(window.localStorage.getItem("jolly_location")!)
      : null
  );

  const [location, setLocation] = useState<OptionType | null>(null);

  // fetch locations
  const getLocations = async () => {
    try {
      const res = await ApiFetcher.get("/location/all");
      setLocations(res?.data?.data);
      typeof window !== "undefined" &&
        localStorage.setItem("jolly_location", JSON.stringify(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(location);

  const OptionsArr: OptionType[] | undefined = locations?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  console.log(OptionsArr);

  function getDefaultTime(): string {
    const now = new Date();
    const currentHours = now.getHours();

    if (currentHours >= 18) {
      // If it's past 6 PM, set the default time to 8:00 AM the next day
      now.setDate(now.getDate() + 1);
      now.setHours(8, 0, 0, 0);
    } else {
      // Otherwise, set it to 1 hour ahead of the current time
      now.setHours(currentHours + 1, 0, 0, 0);
    }

    return formatTime(now);
  }

  const [reservationTime, setReservationTime] = useState<string>(
    getDefaultTime()
  );

  // set date to next day if time is past 6pm
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 18) {
      // If it's past 6 PM, set the reservationDate to the next day
      const nextDay = new Date(now);
      nextDay.setDate(now.getDate() + 1);
      nextDay.setHours(18, 0, 0, 0); // Set it to 6 PM of the next day
      setReservationDate(nextDay);
    } else {
      // If it's before 6 PM, set the reservationDate to today at 6 PM
      setReservationDate(now);
    }

    getLocations();
  }, []);

  // handle time change
  // Function to handle changes in the time input
  function handleTimeChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const selectedValue = event.target.value;
    setReservationTime(selectedValue);
  }

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
      ? setAdult((prev) => (prev > 1 ? prev - 1 : 1))
      : setChildren((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const contextValue: AuthContextType = {
    kpangba_user,
    login,
    logout,
    child,
    adult,
    handleIncrement,
    handleDecrement,
    reservationDate,
    setReservationDate,
    reservationTime,
    handleTimeChange,
    OptionsArr,
    location,
    setLocation
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
