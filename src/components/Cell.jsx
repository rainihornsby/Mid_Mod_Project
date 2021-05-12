import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { Tetrominos } from '../tetrominos';

// can write the syle components inside the respective components as well, if I don't want to do the import/ export
const Cell = ( { type } ) => (
    <StyledCell type={type} color={Tetrominos[type].color}/>
)

export default Cell;