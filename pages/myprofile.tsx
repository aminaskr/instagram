import React from "react";
import GuardedPage from "@/components/GuardedPage";
import Sidebar from "@/components/Sidebar";
import type { ReactElement } from "react";
import Profile from "@/containers/Profile";

const myprofile = () => {
  return (
    <GuardedPage>
      <div className="bg-black w-full">
        <Profile />
      </div>
    </GuardedPage>
  );
};

myprofile.getLayout = function getLayout(page: ReactElement) {
  return <Sidebar>{page}</Sidebar>;
};

export default myprofile;
