import { DateRange } from "react-day-picker";
import type { Database } from "./database.types";
import { ReactNode } from "react";
import type { Dispatch, SetStateAction } from "react";

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
  Cabins: Pick<Cabin, "name" | "image">;
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
