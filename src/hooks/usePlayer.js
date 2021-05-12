// with custom hooks you use 'use' before the name in the file name
// useState returns an array with 2 items. [actual state, function to change state]
import { useState, useCallback } from 'react';
import { Tetrominos, randomTetrominos } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelper'

// make sure you put 'use' or else it won't know it's a hook
// create a state that returns an array
// player logic
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x:0, y:0},
        // puts a tetrominos on the board right when the app is loaded
        // tetromino: randomTetrominos().shape,
        // this allows it to start black until the start button is clicked
        tetromino: Tetrominos[0].shape,

        collided: false

    });

    const updatePlayerPos = ({ x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided
        }))
    }

    const resetPlayer = useCallback(()=>{
        setPlayer({
            // positions tetromino at the start of the game or when a reset happens, y set to 0 so that is resets at the top of the stage
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetrominos().shape,
            collided: false,
        })

    }, [])

return[player, updatePlayerPos, resetPlayer];
} 