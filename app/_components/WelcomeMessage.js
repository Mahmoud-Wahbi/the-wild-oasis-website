import { connection } from "next/server";
import { auth } from "../_lib/auth";

async function WelcomeMessage() {
  await connection();
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}

export default WelcomeMessage;
