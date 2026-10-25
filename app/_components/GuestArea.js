import Link from "next/link";
import { connection } from "next/server";
import { auth } from "../_lib/auth";

export default async function GuestArea() {
  await connection();
  const session = await auth();

  return session?.user?.image ? (
    <Link
      href="/account"
      className="hover:text-accent-400 transition-colors flex items-center gap-4"
    >
      <img
        src={session.user.image}
        alt={session.user.name}
        referrerPolicy="no-referrer"
        className="h-8 rounded-full"
      />
      <span>Guest area</span>
    </Link>
  ) : (
    <Link
      href="/account"
      className="hover:text-accent-400 transition-colors"
    >
      <span>Guest area</span>
    </Link>
  );
}
