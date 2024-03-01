
import './style.css'


function Square ({value}){
    return <button className="square">{value}</button>
}

export default function TikTacToe(){
    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
}