import React from "react";
import { useRouter } from "next/router";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
const GuardedPage = ({ children }: { children: React.ReactElement }) => {
  const { user, isLoading } = useFirebaseAuth();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  } else {
    router.push("/login");
  }
};

export default GuardedPage;
