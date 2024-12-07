import "./Button.css"
function Button({solutionNext, solutionPrevious}) {
    
    return (
        <div className="buttons">
            <button className="btn-1" onClick={solutionPrevious}>Previous Solution</button>
            <button className="btn-2" onClick={solutionNext}>Next Solution</button>
        </div>
    )
}

export default Button;