import EditReservationPage from "@/app/_components/EditReservationPage";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

import type { EditReservationPageProps } from "@/app/_types/index";

export default async function Page({ params }: EditReservationPageProps) {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <EditReservationPage params={params} />
      </Suspense>
    </div>
  );
}
