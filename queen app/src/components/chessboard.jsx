import './chessboard.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
function Chessboard(){
    let board = [];
    for(let i = verticalAxis.length-1; i>=0; i--) {
        for(let j = 0; j < horizontalAxis.length; j++) {
            if((i+j)%2 === 0) {
                board.push(<div className='black'></div>)
            }
            else {
                board.push(<div className='white'></div>)
            }
        }
    }

    return(
        <div id='chessboard'>{board}</div>
    )
}

export default Chessboard;