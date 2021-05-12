import styled from 'styled-components'
// style for the tetris stage
export const StyledStage = styled.div`
display: grid;
grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
        );
        grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: .1em;
    border: .2em solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;

`
export default StyledStage;