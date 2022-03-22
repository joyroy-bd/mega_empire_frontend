import { getDatabase } from "firebase/database";
import app from "../firebase";

function useDatabase() {
  return getDatabase(app);
}
export default useDatabase;
