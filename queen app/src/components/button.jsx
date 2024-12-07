import "./Button.css"
function Button({solutionNext, solutionPrevious}) {
    
    return (
        <div className="buttons">
            <button onClick={solutionPrevious}>Previous Solution</button>
            <button onClick={solutionNext}>Next Solution</button>
        </div>
    )
}

export default Button;