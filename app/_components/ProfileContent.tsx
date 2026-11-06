import { connection } from "next/server";
import { auth } from "../_lib/auth";
import { getGuest } from "../_lib/data-service";
import SelectCountry from "./SelectCountry";
import UpdateProfileForm from "./UpdateProfileForm";

async function ProfileContent() {
  await connection();

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const email = session.user.email;
  if (!email) throw new Error("User email is missing");

  const guest = await getGuest(email);
  if (guest === null) throw new Error("Guest can't be found");

  return (
    <UpdateProfileForm guest={guest}>
      <SelectCountry
        name="nationality"
        id="nationality"
        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        defaultCountry={guest.nationality || "Syria"}
      />
    </UpdateProfileForm>
  );
}

export default ProfileContent;
