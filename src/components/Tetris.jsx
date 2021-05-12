import React, { useState } from 'react'
// import components
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

// style components
import {createStage, checkCollision} from '../gameHelper'
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

// custom hooks
import {usePlayer} from '../hooks/usePlayer'
import {useStage} from '../hooks/useStage'

const Tetris = () => {
    // hooks take a current state value and a function that lets you update it
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    // sending in the player, using it in usePlayer and useStage hook
    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);


    console.log('re-render');

        // left and right movement
    const movePlayer = dir => {
        // if I'm not colliding with anything I move, if I do I do not move
        if(!checkCollision(player, stage, {x: dir, y: 0})){
            updatePlayerPos({x : dir, y:0});
        }

    }

        //  resets everything and starts game
    const startGame = () => {
        
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

        // tetrominos drop speed, later it will speed will depend on level
    const drop = () => {
        if(!checkCollision(player, stage, { x: 0, y: 1 })) {
        updatePlayerPos({ x:0, y:1, collided: false });
        } else {
            if (player.pos.y < 1) {
                console.log("Game Over Loser ;P");
                setGameOver(true);
                setDropTime(null);
            }
            // merges tetromino into stage when it drop onto something
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    }
        
    const dropPlayer = () => {
        drop();
    }

        // callback function that is called when I move with the arrow keys
        // find keycodes for arrow keys
    const move = ({keyCode}) => {
        if (!gameOver) {
            if(keyCode === 37){
                movePlayer(-1);
            } else if ( keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40){
                dropPlayer();
            }
        }
    }
    console.log(createStage())
    return (
        //  add key inputs
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                {/* stage prop represents useStage hook */}
            <Stage stage={stage}/>
            <aside>
                {/* when game over happens this is what says Game Over in red letters, ternery statement */}
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over"/>
                ):(
                    // if the game is not over this is displayed
                <div>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
                </div>
                )}
                {/* put the callback prop on from the StartButton component function*/}
                <StartButton callback={startGame}/>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
        
    )
}

export default Tetris;