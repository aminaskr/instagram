import ExploreList from "@/containers/ExploreList";
import React from "react";
import Sidebar from "@/components/Sidebar";
import type { ReactElement } from "react";
import GuardedPage from "@/components/GuardedPage";

const explore = () => {
  return (
    <GuardedPage>
      <div className="bg-black w-full min-h-screen">
        <ExploreList />
      </div>
    </GuardedPage>
  );
};

explore.getLayout = function getLayout(page: ReactElement) {
  return <Sidebar>{page}</Sidebar>;
};

export default explore;
