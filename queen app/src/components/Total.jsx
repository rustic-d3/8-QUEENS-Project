import "./Total.css";

function Total({totalSolutions, solutionNumber}) {
    return (
        <div className="informations cinzel-decorative-bold">
           <p>TOTAL SOLUTIONS: <span className="important">{totalSolutions}</span></p>
           <p>SOLUTION NUMBER: <span className="important">{solutionNumber+1}</span></p>
        </div>
            
        
    )
}

export default Total;