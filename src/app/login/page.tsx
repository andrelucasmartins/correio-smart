"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithGoogle } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import signIn from "@/firebase/auth/sign-in";
import { FirebaseError } from "firebase/app";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";


export default function LoginPage() {
  const [user, setUser ] = useState<User | null>(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { result, error } = await signIn(email, password);

      if(error) {
        const firebaseError = error as FirebaseError;
        if (firebaseError.message) {
          console.log(firebaseError.message);
          throw new Error(firebaseError.message);
        }else {
          console.log('Unknown Error:', firebaseError);
          throw new Error("Unknown Error");
        }
      }

      console.log(result);
      return router.push("/dashboard")
      
    } catch (error) {
      console.error("Error: ", error)
    }
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(authUserCredentials: User | null) => {
      
      if (authUserCredentials) {
        setUser(authUserCredentials);
        router.push("/dashboard");
      } else {
        setUser(null);
      }
    })

    return () => unsubscribe();
  }, [router])

  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-lvh">
      <div className="flex items-center justify-center py-12">
        {
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form onSubmit={handleForm} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  name="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              {/* <form> */}

              <Button
                variant="outline"
                className="w-full"
                onClick={() => signInWithGoogle()}
              >
                Login with Google
              </Button>
              {/* </form> */}
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        }
      </div>
      <div className="hidden bg-muted lg:block content-center bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-right">
        <Image
          src="/logo.avif"
          alt="Logo Correio Smart"
          width="200"
          height="200"
          className="object-cover dark:brightness-[0.2] dark:grayscale mx-auto mix-blend-multiply flex self-center content-center"
        />
        <h1 className="mx-auto font-bold text-2xl text-center">
          Correio Smart
        </h1>
      </div>
    </div>
  );
}
