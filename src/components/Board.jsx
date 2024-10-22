import React, { useEffect, useState } from 'react'
import IconX from "../UI/cross.svg"
import IconO from "../UI/circle.svg";
import drawLogo from "../UI/draw.svg"
import XWinLogo from "../UI/xwins.svg"
import OWinLogo from "../UI/owin.svg"
import retry from "../UI/retry.svg"
import ForeGround from '../components/ForeGround'



const Board = () => {
    const initialBoard = Array(9).fill(null)
    let logo = null;
    const [board, setBoard] = useState(initialBoard)
    const [player, setPlayer] = useState(0);
    const [winner, setWinner] = useState(null);
    const [isOver, setGameState] = useState(false);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);


    const HandelClick = (index) => {
        if (board[index]) {
            return
        } else {
            const newBoard = [...board];
            newBoard[index] = player === 0 ? "O" : "X";
            setBoard(newBoard);
            setPlayer(player === 0 ? 1 : 0); // switch player
        }
    }
    const getWinner = (board) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.includes(null) ? null : 'Draw';
    }
    useEffect(() => {
        let result = getWinner(board)
        if (result) {
            setGameState(true)
            setWinner(result)
        }
    }, [board])
    
    useEffect(() => {
        if (winner === "O") {
        setScore1(prevScore => prevScore + 1);
        } else if (winner === "X") {
            setScore2(prevScore => prevScore + 1);
        }
    }, [winner]);


    const Reload = () => {
        setBoard(initialBoard);
        setPlayer(0)
        setWinner(null)
        setGameState(false)
    }
    if (winner == "Draw") {
        logo = drawLogo
    } else {
        winner == "O" ? logo = OWinLogo : logo = XWinLogo
    }

	
    return (
        <>
        {/* Navbar */}
        <div>
			<div className="max-w-screen-md flex flex-wrap items-center justify-between mx-[20px] my-[2em] p-[20px] md:mx-auto md:p-4 bg-zinc-800 rounded-xl">
				<div className="div flex gap-10">
					<h1 className='text-white text-xl font-bold'>Player 1</h1>
					<h1 className='text-red-500 text-2xl font-bold'>{score1}</h1>
				</div>
				<div className="div flex gap-10">
					<h1 className='text-blue-400 text-2xl font-bold'>{score2}</h1>
					<h1 className='text-white text-xl font-bold'>Player 2</h1>
				</div>
			</div>
		</div>

        {/* Board */}

            <div className={`h-[90vh] w-screen  items-center justify-center z-10 absolute bg-transparent ${winner != null ? "hidden" : "flex"} absolute my-[-80px] md:my-0 mr-[10px]`}>
                <div className="grid grid-cols-3 grid-rows-3  p-4 justify-center items-center  gap-[30px] md:gap-[10px] h-[23em] w-[30em] md:h-[27em] md:w-[30em] md:mb-[3em] md:ml-[1em]">
                    {board.map((elem, index) => {
                        return <div className='h-[4em] w-[5em]  md:h-[5em] md:w-[8em]flex items-center justify-center bg-transparent mb-[10px] ' key={index} onClick={() => HandelClick(index)}>
                            {elem && <img src={elem == "O" ? IconO : IconX} alt="" className="h-[4em] w-[4em] md:h-[5em] md:w-[5em] object-cover" />}
                        </div>
                    })}
                </div>
            </div>
            {/*result screen */}
            <div className={` h-[90vh] w-screen  items-center justify-center z-[99] ${winner == null ? "hidden" : "flex"} ease-linear absolute `} >
                <div className=' result h-[50vh] w-[90vw] md:w-[40vw] bg-zinc-800 rounded-3xl flex items-center justify-center flex-col isolate mb-[7.5em]'>
                    <img src={logo} alt="result" className='h-[5em] w-[10em] ' />
                    <button className=' h-[13em] w-[13em] bg-zinc-100 rounded-3xl flex items-center justify-center hover:bg-slate-600 ease-in' onClick={Reload}><img src={retry} alt="retry"/></button>
                </div>
            </div>
            <ForeGround isOver={isOver}/>
        </>

    )
}

export default Board

