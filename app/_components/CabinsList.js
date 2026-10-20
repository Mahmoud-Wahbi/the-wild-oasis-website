import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";
// import { unstable_noStore as noStore } from "next/cache";

async function CabinsList({ filter }) {
  // noStore();

  const cabins = await getCabins();

  let filterdData;
  if (filter === "all") filterdData = cabins;
  if (filter === "small")
    filterdData = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    filterdData = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  if (filter === "large")
    filterdData = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {filterdData.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CabinsList;
