import React, { useEffect, useState } from "react";
import useCurrentWar from "../../hooks/useCurrentWar";
import CurrentWarHeader from "./CurrentWarHeader";
import CurrentWarMain from "./CurrentWarMain";
import CurrentWarFooter from "./CurrentWarFooter";

export default function CurrentWar() {
  let { data } = useCurrentWar();
  const [showdetails, setShowdetails] = useState({ show: false, data: null });

  const [reload, setreload] = useState(false);

  useEffect(() => {
    let ent = setInterval(() => {
      setreload((pre) => !pre);
    }, 1000 * 60);
    return () => {
      clearInterval(ent);
    };
  }, [reload]);

  return (
    <>
      {data && (
        <section className="container">
          <div className={`currentwar ${data.state}`}>
            <>
              <CurrentWarHeader data={data} />
              {data.state !== "notInWar" && (
                <>
                  <CurrentWarMain setShowdetails={setShowdetails} data={data}>
                    <CurrentWarFooter
                      showdetails={showdetails}
                      setShowdetails={setShowdetails}
                      data={data}
                    />
                  </CurrentWarMain>
                </>
              )}
            </>
          </div>
        </section>
      )}
    </>
  );
}

/*

*/
