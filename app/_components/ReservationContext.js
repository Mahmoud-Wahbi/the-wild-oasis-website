"use client";

import { createContext, useContext, useState } from "react";

const ReservtionContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservtionContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservtionContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservtionContext);

  if (context === undefined)
    throw new Error("Reservation Context was user outside Provider");

  return context;
}

export { ReservationProvider, useReservation };
