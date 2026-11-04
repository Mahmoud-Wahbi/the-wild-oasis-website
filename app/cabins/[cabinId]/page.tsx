import { Suspense } from "react";

import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import type { CabinPageProps } from "../../_types/index";
import CabinContent from "@/app/_components/CabinContent";

export async function generateMetadata({ params }: CabinPageProps) {
  const { cabinId } = await params;
  const { name } = await getCabin(Number(cabinId));
  return {
    title: `Cabin ${name}`,
  };
}
export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return ids;
}

export default async function Page({ params }: CabinPageProps) {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div>
        <Suspense fallback={<Spinner />}>
          <CabinContent params={params} />
        </Suspense>
      </div>
    </div>
  );
}
