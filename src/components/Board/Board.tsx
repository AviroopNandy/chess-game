import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";
// import Popup from "reactjs-popup";

import "./Board.css";

const Chess = require("chess.js");

const Board: React.FC = () => {
    const [chess] = useState<ChessInstance>(
        new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
    );

    const [fen, setFen] = useState(chess.fen());
    const [numberOfMoves, setNumberofMoves] = useState(0);
    const [isModalOpen, setModalState] = useState(false);

    const toggleModal = () => {
        setModalState(!isModalOpen);
        console.log(isModalOpen);
    }

    var winnerText = "";

    const handleMove = (move: ShortMove) => {
        if(chess.move(move)) {
            setTimeout(() => {
                const moves = chess.moves();
                if(moves.length > 0) {
                    const computerMove = moves[Math.floor(Math.random() * moves.length)];
                    chess.move(computerMove);
                    setFen(chess.fen());
                } else {
                    alert("Game over in " + numberOfMoves + " moves!");
                    // console.log("Game Over!");
                }
            }, 300);
            setFen(chess.fen());
            setNumberofMoves(numberOfMoves + 1);
        }
    };

    return(
        <div className="centerBoard">
            <h1 className="title">Welcome to the Game!</h1>
            <Chessboard
                width={ 400 }
                position={ fen }
                onDrop={ (move) => handleMove({
                    from: move.sourceSquare,
                    to: move.targetSquare,
                    promotion: "q",
                })}
            />
            <h3 className="movesCount">Number of Moves by User (White): { numberOfMoves }</h3>
            {/* <button onClick={ toggleModal }>Click</button> */}
            {/* <Modal
                title={ winnerText }
                isOpen={ isModalOpen }
                onClose={ toggleModal }
            >
                Well played!
            </Modal> */}
        </div>
    );
}

export default Board;