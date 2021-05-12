// how many cells, height and width
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), ()=>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

        // checks to see if any player controled tetrominos collides with any set tetrominos
    export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
        for (let y = 0; y < player.tetromino.length; y += 1) {
            for (let x = 0; x < player.tetromino[y].length; x += 1) {
                // check that I'm on an actual tetromino cell
                if (player.tetromino[y][x] !== 0) {
                    if(
                    // check that movement is within the game height (y)
                    // should not go through bottom of stage
                    // ! means 'not', || is 'or'
                    !stage[y + player.pos.y + moveY] ||
                    // check that movement is within the game areas width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // check that the cell I'm moving to isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                    ) 
                    {
                            return true;
                    }
                }
            }
        }
    }