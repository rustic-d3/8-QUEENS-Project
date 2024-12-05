import './chessboard.css'
import Tiles from './Tiles';
function is_safe(row, column, board)
    {
    //checks the column and rows
        for(let i=0; i < 8; i++){
            if(board[i][column]===1 || board[row][i]===1)
            {
                return false;
            }
        }
        
        //checks the positive diagonal
        for(let i = 0;  i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                if((i-j === row-column)&&(board[i][j] === 1)) {
                    return false;
                    
                }
            }
        }
        //checks the negative diagonal
        for(let i = 0;  i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                if((i+j === row+column)&&(board[i][j] === 1)) {
                    return false;
                    
                }
            }
        }

        return true;

    }



let placement = [[0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0]
                ]

function Chessboard(){
        

   let result = is_safe(1, 3, placement);
   console.log(result);


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