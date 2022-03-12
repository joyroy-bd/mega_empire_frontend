import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";
import "../src/styles/index.css";
import useClanInfo from "./hooks/useClanInfo";
import Loading from "./pages/Loading";
import app from "./firebase";
import { getDatabase, set, ref } from "firebase/database";
import supercell from "supercell-api";
//const supercell = require("supercell-api");

function App() {
  let { data } = useClanInfo();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={data ? <Home clanInfo={data} /> : <Loading />}
          />
          <Route path="/members" element={<Members />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
