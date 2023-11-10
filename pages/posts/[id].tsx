import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import GuardedPage from "@/components/GuardedPage";
import PostDetails from "@/containers/PostDetails";

const postsId = () => {
  const router = useRouter();
  const id = router.query.id;
  // console.log(id);

  return (
    <GuardedPage>
      <div className="bg-black w-full min-h-screen">
        {id && <PostDetails id={id} />}
      </div>
    </GuardedPage>
  );
};

postsId.getLayout = function getLayout(page: ReactElement) {
  return <Sidebar>{page}</Sidebar>;
};

export default postsId;
