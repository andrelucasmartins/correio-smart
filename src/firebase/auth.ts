
import { auth } from "./firebaseConfig";

import {
        type User,
        onAuthStateChanged as _onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup,
} from 'firebase/auth';



export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  return _onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
       
        const provider = new GoogleAuthProvider();

        try {
                const result = await signInWithPopup(auth, provider);

                if (!result || !result.user) {
                throw new Error('Google sign in failed');
                }
                return result.user.uid;
        } catch (error) {
                console.error("Error signing in with Google", error);
        }
}

export async function signOut() {
        try {
                await auth.signOut();
                
        } catch (error) {
                console.error("Error signing out with Google", error);
        }
}
