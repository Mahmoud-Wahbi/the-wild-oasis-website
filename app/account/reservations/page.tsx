import ReservationsContent from "@/app/_components/ReservationsContent";
import Spinner from "@/app/_components/Spinner";

import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>
      <Suspense fallback={<Spinner />}>
        <ReservationsContent />
      </Suspense>
    </div>
  );
}
