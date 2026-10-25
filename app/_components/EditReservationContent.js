import SubmitButton from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { connection } from "next/server";

async function EditReservationContent({ bookingId }) {
  await connection();

  // authorization prevent user to show other users data
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const booking = await getBooking(bookingId);
  if (booking.guestId !== session.user.guestId) {
    throw new Error("You are not allowed to view this booking");
  }
  //

  const { numGuests, observations, cabinId } = booking;
  const { maxCapacity } = await getCabin(cabinId);
  return (
    <form
      action={updateReservation}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          defaultValue={numGuests}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          required
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          defaultValue={observations ?? ""}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <input type="hidden" name="bookingId" value={bookingId} />

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingText="Updating...">
          Update reservation
        </SubmitButton>
      </div>
    </form>
  );
}

export default EditReservationContent;
