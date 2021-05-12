import styled from 'styled-components'

export const StyledDisplay = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
margin: 0 0 2em 0;
padding: 2em;
border .4em solid #333;
min_height: 3em;
width :100%;
border-radius: 2em;
color: ${props => (props.gameOver ? 'red' : "#999")};
background: #000;
font-size: 0.8em;

`