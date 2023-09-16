export interface LocationType {
  _id: "650571d4d48a3783846bd039",
  name: "Ikeja",
  region_id: "6505715dd48a3783846bd033",
  state: "Lagos",
}

export interface OptionType{
  value: string
  label: string
}

export interface UserProps {
  email: string;
  isVerified: boolean;
  name: string;
  phoneNumber: string;
  id: string;
  hmo:string;
}

export interface RestaurantType {
  _id: string;
  resturant_name: string;
  location_id: string;
  location_name: string;
  location_meta: {
    region: {
      id: string;
      state: string;
      name: string;
    };
    address: string;
    id: string;
    _id: string;
  };
  rating: number;
  open_time: string;
  close_time: string;
  price_per_adult: number,
  price_per_child: number,
  menu: {
      meal_type: string;
      meals: string[];
      _id: string;
    }[]
}

export interface TabOptions {
  meal_type: string;
  meals: string[];
  _id: string;
}

interface Customer {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  healthcareServiceProvider: string;
  isVerified: boolean;
  __v: number;
}



export interface ReservationType {
  reservation_code: string;
  restaurant_id: string;
  booked_date: string; // You might consider using a Date type if you parse it.
  booked_time: string;
  CreatedAt: string; // You might consider using a Date type if you parse it.
  number_of_seats: number;
  customer_id: string;
  adult: number;
  children: number;
  amount: number;
  payment_type: string;
  payment_status: boolean;
  isCompleted: boolean;
  _id: string;
  __v: number;
  customer: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    healthcareServiceProvider: string;
    isVerified: boolean;
    __v: number;
  }
  restaurant:RestaurantType
}

