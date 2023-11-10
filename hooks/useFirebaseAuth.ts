import 'firebase/auth';
import { useEffect, useState } from 'react';
import {User} from "@firebase/auth";
import {auth} from "@/services/firebase";

const useFirebaseAuth = () => {

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser !== null) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

  }, []);

  return { user, isLoading };
};

export default useFirebaseAuth;
