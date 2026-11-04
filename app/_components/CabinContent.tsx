import { Suspense } from "react";
import { getCabin } from "../_lib/data-service";

import Cabin from "./Cabin";
import Reservation from "./Reservation";
import Spinner from "./Spinner";

import type { CabinPageProps } from "../_types";

async function CabinContent({ params }: CabinPageProps) {
  const { cabinId } = await params;
  const cabin = await getCabin(Number(cabinId));
  return (
    <>
      <Cabin cabin={cabin} />
      <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
        Reserve {cabin.name}. Pay on arrival.
      </h2>

      <Suspense fallback={<Spinner />}>
        <Reservation cabin={cabin} />
      </Suspense>
    </>
  );
}

export default CabinContent;
