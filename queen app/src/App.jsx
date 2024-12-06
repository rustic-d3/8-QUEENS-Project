import Chessboard from "./components/chessboard";
import Total from "./components/Total";
import React, { useState } from "react";
import "./App.css"
function App() {
  const [childData, setChildData] = useState("");
  function total(data) {
    setChildData(data);

  };
  console.log(childData);

  return (
    <>
      <Total totalSolutions = {childData}></Total>
      <Chessboard sendData = {total}></Chessboard>
    </>
  )
}

export default App;