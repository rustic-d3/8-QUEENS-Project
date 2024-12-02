import "./Tiles.css"

function Tiles({number}) {
    if(number % 2 === 0) {
        return <div className="black"></div>
    }
    else {
        return <div className="white"></div>
    }

}
export default Tiles;