import EditReservationContent from "./EditReservationContent";

import type { EditReservationPageProps } from "../_types/index";

async function EditReservationPage({ params }: EditReservationPageProps) {
  const { bookingId } = await params;

  return (
    <>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>
      <EditReservationContent bookingId={bookingId} />
    </>
  );
}

export default EditReservationPage;
