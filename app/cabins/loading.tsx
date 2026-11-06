import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center content-center">
      <Spinner />
      <p className="text-center text-primary-200">Loading cabin</p>
    </div>
  );
}
