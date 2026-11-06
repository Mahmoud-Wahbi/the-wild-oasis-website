import { DateRange } from "react-day-picker";
import type { Database } from "./database.types";
import { ReactNode } from "react";
import type { Dispatch, SetStateAction } from "react";
import { User } from "next-auth";

// Cabin Type
export type Cabin = Database["public"]["Tables"]["Cabins"]["Row"];

export type CabinSummary = Pick<
  Cabin,
  "id" | "name" | "maxCapacity" | "regularPrice" | "discount" | "image"
>;

export type CabinComponentProps = {
  cabin: Pick<Cabin, "name" | "maxCapacity" | "image" | "description">;
};

export type CabinSummaryProps = {
  cabin: CabinSummary;
};

export type CabinPageProps = {
  params: Promise<{ cabinId: string }>;
};

export const FILTERS = ["all", "small", "medium", "large"] as const;

export type Filter = (typeof FILTERS)[number];

export type FilterProps = {
  filter: Filter;
};

export function isFilter(value: string): value is Filter {
  return FILTERS.includes(value as Filter);
}

export type CabinsPageProps = {
  searchParams: Promise<{ capacity?: string }>;
};

// Guest Type
export type Guest = Database["public"]["Tables"]["guests"]["Row"];

export type NewGuest = Pick<Guest, "fullName" | "emailAddress">;

// Booking Type
export type Booking = Database["public"]["Tables"]["bookings"]["Row"];

export type BookingWithCabin = Pick<
  Booking,
  | "id"
  | "created_at"
  | "startDate"
  | "endDate"
  | "numNights"
  | "numGuests"
  | "totalPrice"
  | "guestId"
  | "cabinId"
> & {
  Cabins: Pick<Cabin, "name" | "image"> | null;
};

// Settings Type
export type Settings = Database["public"]["Tables"]["settings"]["Row"];

// Country Type
export type Country = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};

// Components

//=====================================//
//DATE SELECTOR
//=====================================//
export type DateSelectorComponentProps = {
  settings: Settings;
  bookedDates: Date[];
  cabin: Pick<Cabin, "regularPrice" | "discount">;
};

//=====================================//
//Reservation Context
//=====================================//
export type ReservationContextType = {
  range: DateRange;
  setRange: Dispatch<SetStateAction<DateRange>>;
  resetRange: () => void;
};

export type ReservationProviderProps = {
  children: ReactNode;
};

//=====================================//
//Delete Reservation
//=====================================//
export type DeleteReservationProps = {
  bookingId: number;
  onDelete: (bookingId: number) => Promise<void>;
};

//=====================================//
//Edit Reservation Content
//=====================================//

export type EditReservationContentProps = { bookingId: number };

//=====================================//
//Edit Reservation Page
//=====================================//
export type EditReservationPageProps = {
  params: Promise<{ bookingId: number }>;
};

//=====================================//
//Edit Reservation
//=====================================//
export type ReservationProps = {
  cabin: Cabin;
};

//=====================================//
//Edit Reservation
//=====================================//

export type ReservationCardProps = {
  booking: BookingWithCabin;
  onDelete: (bookingId: number) => Promise<void>;
};

//=====================================//
//Reservation Form
//=====================================//
export type ReservationFormProps = {
  cabin: Pick<Cabin, "id" | "maxCapacity" | "regularPrice" | "discount">;
  user: User;
};

//=====================================//
//Reservations List
//=====================================//
export type ReservationsListProps = {
  bookings: BookingWithCabin[];
};

//=====================================//
// Select Country
//=====================================//

export type SelectCountryProps = {
  name: string;
  id: string;
  className: string;
  defaultCountry: string;
};

//=====================================//
// Submit Button
//=====================================//

export type SubmitButton = {
  children: ReactNode;
  pendingText: string;
};

//=====================================//
//Update Profile Form
//=====================================//
export type UpdateProfileFormProps = {
  guest: Guest;
  children: ReactNode;
};
