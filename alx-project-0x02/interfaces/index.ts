export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  title: string;
  styles?: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserCardProps {
  users: UserProps[];
}
