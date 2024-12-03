import './chessboard.css'
import Tiles from './Tiles';

let placement = [[1,0,0,0,0,0,0,0],
                 [0,1,0,0,0,0,0,0],
                 [0,0,1,0,0,0,0,0],
                 [0,0,0,1,0,0,0,0],
                 [0,0,0,0,1,0,0,0],
                 [0,0,0,0,0,1,0,0],
                 [0,0,0,0,0,0,1,0],
                 [0,0,0,0,0,0,0,1]
                ]

function Chessboard(){
    let board = [];
    for(let i = 0; i<8; i++) {
        for(let j = 0; j < 8; j++) {
            const sum = i+j;
            const position = placement[i][j];
            board.push(<Tiles number={sum} queen = {position}/>)
        }
    }

    return(
        <div id='chessboard'>{board}</div>
    )
}

export default Chessboard;