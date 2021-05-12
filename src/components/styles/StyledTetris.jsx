import styled from 'styled-components'
// import background image
import redUni from '../../img/redUni.jpeg'

export const StyledTetrisWrapper = styled.div`
width: 100vw;
height: 100vh;
background: url(${redUni}) #000;
background-size: cover;
overflow: hidden;
`

export const StyledTetris = styled.div`
display: flex;
align-items: flex-start;
padding: 4em;
margin: 0 auto;
max-width: 90em

    aside {
        width: 100%;
        max-width: 20em
        display: block;
        padding 0 2em;
    }
`