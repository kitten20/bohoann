import { useEffect } from "react";
import useStore, { useServerStore } from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./components/Router";

import "./style.scss";

function App() {
  const { basket, addNewItem } = useStore();
  const { serverData, addServerData } = useServerStore();

  useEffect(() => {
    fetch("./server.json")
      .then((res) => res.json())
      .then((res) => addServerData(res));
  }, []);

  return (
    <>
      <Header />

      <Router />

      <Footer />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "white",
          width: 70,
          paddingLeft: 10,
          borderLeft: "1px solid black",
        }}
      >
        <p>товары</p>

        {basket?.map((i, index) => (
          <div key={index}>
            <hr />
            <p>{i?.item}</p>
            <p>{i?.price}</p>
            <p>{i?.lastPrice}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
