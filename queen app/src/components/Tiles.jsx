import "./Tiles.css"
import Piece from "./Piece";

function Tiles({number, queen}) {
    if(number % 2 === 0) {
        if(queen==="1") {
            return <div className="white"><Piece /></div>
        }
        else {
            return <div className="white"></div>
        } 
        
    }
    else {
        if(queen==="1") {
            return <div className="black"><Piece/></div>
        }
        else{
            return <div className="black"></div>
        }
    }

}
export default Tiles; 