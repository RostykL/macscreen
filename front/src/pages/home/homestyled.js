import styled from 'styled-components'

export const Menu = styled.div`
    max-width: 1200px;
    height: 80vh;
    margin: 0 auto;
    border: 4px solid #ff5252;
    border-radius: 20px;
    padding: 20px;
`

export const MenuTitle = styled.div`
    height: 50px;
    font-size: 2em;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;

`
export const Burgers = styled.div`
    margin-top: 20px;
    height: calc(100% - 50px);
    max-width: 1250px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    } 
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 10px;
    justify-content: center;
    align-content: flex-start;
    text-align: center;
`