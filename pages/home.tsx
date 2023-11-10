import Sidebar from "@/components/Sidebar";
import type { ReactElement } from "react";
import GuardedPage from "@/components/GuardedPage";
import PostList from "@/containers/PostList";

const Index = () => {
  return (
    <GuardedPage>
      <div className="bg-black min-h-screen w-full">
        <PostList />
      </div>
    </GuardedPage>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Sidebar>{page}</Sidebar>;
};

export default Index;
