import { connection } from "next/server";
import { auth } from "../_lib/auth";
import { getBookings } from "../_lib/data-service";
import ReservationsList from "./ReservationsList";
import Link from "next/link";

export default async function ReservationsContent() {
  await connection();

  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return bookings.length === 0 ? (
    <p className="text-lg">
      You have no reservations yet. Check out our{" "}
      <Link className="underline text-accent-500" href="/cabins">
        luxury cabins &rarr;
      </Link>
    </p>
  ) : (
    <ReservationsList bookings={bookings} />
  );
}
