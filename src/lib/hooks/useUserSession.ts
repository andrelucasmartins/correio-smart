
'use client'
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useUserSession(InitSession: string | null) {
  // The initialUser comes from the server through a server component
  const [user, setUser] = useState<string | null>(InitSession);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser.uid);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (user === undefined) return;
  //     if (user?.email !== authUser?.email) {
  //       router.refresh();
  //     }
  //   });
  // }, [user, router]);

  return user;
}
