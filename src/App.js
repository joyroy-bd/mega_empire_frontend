import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";
import "../src/styles/index.css";
import useClanInfo from "./hooks/useClanInfo";
import Loading from "./pages/Loading";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Warinfo from "./pages/Warinfo";
import Test from "./pages/test";
import { useEffect } from "react";
import Clan from "./pages/Clan";

function App() {
  let { data } = useClanInfo();

  useEffect(() => {
    if (data) {
      let link = document.createElement("link");
      link.rel = "icon";
      link.href = data.badgeUrls.medium;
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, [data]);

  return (
    <>
      {data && (
        <BrowserRouter>
          <Header clanInfo={data} />
          <Nav />
          <Routes>
            <Route index element={<Home clanInfo={data} />} />
            <Route path="/members" element={<Members />} />
            <Route path="/war/*" element={<Warinfo />} />
            <Route path="/clan/*" element={<Clan />} />
            <Route path="/test" element={<Test />} />
            <Route path="/error" element={<p>Error</p>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
      {!data && <Loading />}
    </>
  );
}

export default App;
