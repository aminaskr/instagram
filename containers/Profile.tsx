import ProfileView from "@/components/ProfileView";
import { UserProfileDto } from "@/services/generated/data-contracts";
import { userController } from "@/services/http";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState<UserProfileDto | null>(null);

  useEffect(() => {
    userController
      .getUserProfile("ce7df395-8690-48ab-8ee9-121b90250889")
      .then((result) => {
        setUserDetails(result.data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <main className="max-w-screen-lg mx-auto">
        <ProfileView {...userDetails} />
      </main>
    </div>
  );
};

export default Profile;
