import EditReservationContent from "./EditReservationContent";

async function EditReservationPage({ params }) {
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
