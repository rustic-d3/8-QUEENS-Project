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

    function solve() {
    let solutions = []; // this will be the array with multiple solutions
    function backtrack(row) {
        if(row === 8) {
            solutions.push(placement.map(row => row.join('')));
            return;
        }

        for(let col = 0; col < 8; col++) {
            if(is_safe(row, col, placement)) {
                placement[row][col] = "1";
                backtrack(row+1); // backtrack to the next row
                placement[row][col] = "0"; // reset the bad placement, and go to the next iteration
            }
        }
    }
    backtrack(0);
    return solutions;
}


let placement = [["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"],
                 ["0","0","0","0","0","0","0","0"]
                ]; // I could use a better solution for creating this array, but it is like this for visualisation purposes

let solutions = solve();

function Chessboard({sendData, sendSolution}) {
    sendData(solutions.length);
    let board = []; // the board that will be displayed 
    let current_solution = solutions[sendSolution];

    if (solutions.length === 0) {
        return <div>No solutions found!</div>; // Handle empty solutions case
    }

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