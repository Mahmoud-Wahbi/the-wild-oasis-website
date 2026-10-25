import EditReservationPage from "@/app/_components/EditReservationPage";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export default async function Page({ params }) {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <EditReservationPage params={params} />
      </Suspense>
    </div>
  );
}
