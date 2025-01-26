import {useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {
    const [gameBoard,setGameBoard] = useState(initialGameBoard);
    
    const handleSelectSquare = (rowIdx,colIdx) =>{
        setGameBoard((prevGameBoard)=>{
            console.log(prevGameBoard)
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            
            // console.log(updatedBoard)
            updatedBoard[rowIdx][colIdx] = 'X';
            // console.log('clicked');
            return updatedBoard;
        });
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIdx) => (
                <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx) => (
                            <li key={colIdx}>
                                <button onClick={() => handleSelectSquare(rowIdx,colIdx)}>{playerSymbol}</button>
                                {/* <button >{playerSymbol}</button> */}
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>

    );
}