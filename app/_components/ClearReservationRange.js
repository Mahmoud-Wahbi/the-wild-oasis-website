"use client";

import { useEffect } from "react";
import { useReservation } from "./ReservationContext";

function ClearReservationRange() {
  const { resetRange } = useReservation();

  useEffect(() => {
    resetRange();
  }, [resetRange]);

  return null;
}

export default ClearReservationRange;
