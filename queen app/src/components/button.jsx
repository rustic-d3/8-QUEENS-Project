import "./Button.css"
function Button({solutionNext, solutionPrevious}) {
    
    return (
        <div className="buttons cinzel-decorative-bold">
            <button className="btn-2 btn" onClick={solutionNext}>Next Solution</button>
            <button className="btn-1 btn" onClick={solutionPrevious}>Previous Solution</button>
        </div>
    )
}

export default Button;