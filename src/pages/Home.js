import React from 'react';
import Board from "../components/board";
import boards from "../app/boards"
import "../styles/Board.css";

function Home() {
    return (
        <>
        <div className="HomePage">
            <div className='BoardHolder'>
                {boards.map((board, index)=>{return <Board board={board} key={index}/>})} 
            </div>
        </div>

        </>
    )
}

export default Home;
