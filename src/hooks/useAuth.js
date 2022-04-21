import { getAuth } from "firebase/auth";
import app from "../firebase";

function useAuth() {
  return getAuth(app);
}
export default useAuth;
