import { connection } from "next/server";
import { auth } from "../_lib/auth";
import { getGuest } from "../_lib/data-service";
import SelectCountry from "./SelectCountry";
import UpdateProfileForm from "./UpdateProfileForm";

async function ProfileContent() {
  await connection();

  const session = await auth();
  const guest = await getGuest(session.user.email);
  return (
    <UpdateProfileForm guest={guest}>
      <SelectCountry
        name="nationality"
        id="nationality"
        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        defaultCountry={guest.nationality}
      />
    </UpdateProfileForm>
  );
}

export default ProfileContent;
