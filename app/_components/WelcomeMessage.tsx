import { connection } from "next/server";
import { auth } from "../_lib/auth";

async function WelcomeMessage() {
  await connection();
  const session = await auth();

  if (session === null) throw new Error("User must log in");
  if (!session.user.name) throw new Error("User name is missing");

  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}

export default WelcomeMessage;
