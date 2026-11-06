import { Suspense } from "react";
import WelcomeMessage from "../_components/WelcomeMessage";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <WelcomeMessage />
    </Suspense>
  );
}
