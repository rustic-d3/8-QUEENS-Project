import "./Total.css";

function Total({totalSolutions, solutionNumber}) {
    return (
        <div className="informations">
           <p>Total Solutions: {totalSolutions}</p>
           <p>Solution number {solutionNumber+1}</p>
        </div>
            
        
    )
}

export default Total;