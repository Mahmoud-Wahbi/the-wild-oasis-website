import { Database } from "./database.types";

// Cabin Type
export type Cabin = Database["public"]["Tables"]["Cabins"]["Row"];

export type CabinSummary = Pick<
  Cabin,
  "id" | "name" | "maxCapacity" | "regularPrice" | "discount" | "image"
>;

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
