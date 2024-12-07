import './chessboard.css'
import Tiles from './Tiles';
function is_safe(row, column, board)
    {
    //checks the column and rows
        for(let i=0; i < 8; i++){
            if(board[i][column]==="1" || board[row][i]==="1")
            {
                return false;
            }
        }
        
        //checks the positive diagonal
        for(let i = 0;  i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                if((i-j === row-column)&&(board[i][j] === "1")) {
                    return false;
                    
                }
            }
        }
        //checks the negative diagonal
        for(let i = 0;  i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                if((i+j === row+column)&&(board[i][j] === "1")) {
                    return false;
                    
                }
            }
        }

        return true;
    }


    

let placement = [["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"]
                ];


function solve() {
    let solutions = [];
    function backtrack(row) {
        if(row === 8) {
            solutions.push(placement.map(row => row.join('')));
            return;
        }

        for(let col = 0; col < 8; col++) {
            if(is_safe(row, col, placement)) {
                placement[row][col] = "1";
                backtrack(row+1);
                placement[row][col] = "0";
            }
        }
    }
    backtrack(0);
    return solutions;
}

let solutions = solve();

function Chessboard({sendData, sendSolution}){
    sendData(solutions.length);

    if (solutions.length === 0) {
        return <div>No solutions found!</div>; // Handle empty solutions case
    }
    let board = [];
    let current_solution = solutions[sendSolution];
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            const sum = i+j;
            const position = current_solution[i][j];
            board.push(<Tiles number={sum} queen = {position}/>)
        }
    }

    return(
        <div id='chessboard'>{board}</div>
    )
}

export default Chessboard;