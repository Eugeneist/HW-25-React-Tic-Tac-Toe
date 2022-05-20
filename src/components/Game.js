import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import Board from "./Board";

const Game = () => {
    const [ history, setHistory ] = useState([
        {
            squares: Array(9).fill(null),
        },
    ]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    const handleClick = (index) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = [...current.squares];

        const isWinner = calculateWinner(squares);

        if( squares[index] || isWinner ) {
            return;
        }

        squares[index] = xIsNext ? "X" : "O";

        setHistory([
            ...newHistory,
        {
            squares,
        },
        ]);
        setStepNumber(newHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = (step) => () => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (stepNumber == 9) {
        status = `You have a tie! Try new game!`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={handleClick} />
            </div>

            <div className="game-info">
                <div>{status}</div>

                <ol>
                    {history.map((step, index) => {
                        const isStartStep = index === 0;

                        return (
                            <li  key={index}>
                                <button onClick={jumpTo(index)}>
                                    {isStartStep ? `Start new game` : `Go to move #${index}`}
                                </button>
                            </li>
                        );
                    })} 
                </ol>
            </div>
        </div>
    )
}

export default Game;