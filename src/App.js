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
import { useEffect } from "react";

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

  // if (data) {
  //   console.log(data);
  // }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route
            index
            element={data ? <Home clanInfo={data} /> : <Loading />}
          />
          <Route path="/members" element={<Members />} />
          <Route path="/war/*" element={<Warinfo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
