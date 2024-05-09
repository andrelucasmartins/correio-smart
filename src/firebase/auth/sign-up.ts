import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
export default async function SignUp(email: string, password: string){
  let result = null, error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e
    
  }

  return { result, error }
}