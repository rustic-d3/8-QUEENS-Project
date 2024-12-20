import Chessboard from "./components/chessboard";
import Total from "./components/Total";
import Button from "./components/button";
import Audio from "./components/Audio";
import React, { useState } from "react";
import "./App.css"
function App() {
  const [childData, setChildData] = useState(0);
  let [solutionData, setSolutionData] = useState(0);
  function total(data) {
    setChildData(data);
  };

  function nextSolution() {
    setSolutionData(solutionData + 1);
    console.log(solutionData);
};

function previousSolution () {
  setSolutionData(solutionData - 1);
};

if(solutionData >= childData) {
  solutionData = 0;
}
if(solutionData < 0) {
  solutionData = childData-1;
}

  return (
    <>
      <Total totalSolutions = {childData} solutionNumber = {solutionData}></Total>
      <Chessboard sendData = {total} sendSolution ={solutionData}></Chessboard>
      <Button solutionNext={nextSolution} solutionPrevious={previousSolution}></Button>
      <Audio></Audio>
    </>
  )
}

export default App;