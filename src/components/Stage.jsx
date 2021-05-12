import React from 'react'
import Cell from './Cell'
import StyledStage from './styles/StyledStage'

const Stage = ({stage}) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {/* basic java to map over the stage prop, map through the stage array I get the row array which holds the cells, for each cell render a cell component */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
)

export default Stage;