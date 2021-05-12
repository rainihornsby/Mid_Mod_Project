// lets you perform side effect, simular life cycle effects. like componentDidMount, componentDidUpdate and componentWillMount combined
// hooks are used insde a function component to add some local state, don't work inside classes
import {useState, useEffect} from 'react'
import {createStage} from '../gameHelper'

// stage logic

export const useStage = (player, resetPlayer) => {
    // calling createStage() to generate a clean stage
    const [stage, setStage] = useState(createStage());

    useEffect(()=>{
        const updateStage = prevStage => {
            // first clear the stage
            // for loop would be faster than .map
            const newStage = prevStage.map(row =>
                // [1] is grabbing 'clear' from gameHelper's createStage array
                // if(?) cell has not merged set it to a clear spot otherwise(:) leave the cell where it is, maps through to find if any tetromino has collided or not
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
                );
                // drawing the tetromino on stage
                // player coming from
                player.tetromino.forEach((row, y) =>{
                    // map through the row thich is a multidimensional array
                    row.forEach((value, x) => {
                        // if value(tetormino) does not = 0, it can tell lets it know that it is on a cell that makes up the shape of the tetromino
                        if (value !== 0) {
                            // newStage is a flushed stage. x and Y arrays here tell you the coordinates on the stage
                            newStage[y + player.pos.y][x + player.pos.x] = [
                                value,
                                `${player.collided ? 'merged' : 'clear'}`,
                            ]
                        }
                    });

                });
                // check if collided
                if(player.collided) {
                    resetPlayer();
                }
                
                return newStage;
        };
        setStage(prev => updateStage(prev));

    }, 
    // specifiy to use inside useEffect
    // this line bugged, makes tetrominos dissappear if 2 of the same appear back to back. fix found
    // [player.pos.x, player.pos.y, player.collided, player.tetromino]. 
    [player, resetPlayer]);

    return[stage, setStage];
};