
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function useUserSession(initialUser: any) {
  // The initialUser comes from the server through a server component
  const [user, setUser] = useState(initialUser);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (user === undefined) return;
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [user, router]);

  return user;
}
