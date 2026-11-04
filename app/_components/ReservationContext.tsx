"use client";

import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

import type {
  ReservationContextType,
  ReservationProviderProps,
} from "../_types/index";

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const initialState: DateRange = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Reservation Context was user outside Provider");

  return context;
}

export { ReservationProvider, useReservation };
