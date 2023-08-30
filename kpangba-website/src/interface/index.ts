export interface OptionProps {
  label: string;
  value: string;
}

export interface UserProps {
  email: string;
  isVerified: boolean;
  name: string;
  phoneNumber: string;
  user_id: string;
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
  price_per_person: number;
  menu: [
    {
      meal_type: string;
      meals: string[];
      _id: string;
    }
  ];
}
