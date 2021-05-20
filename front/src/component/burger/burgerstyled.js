import styled from 'styled-components'

export const BurgerWrapper = styled.div`
    padding: 20px;
    height: 150px;
    background-color: #FFD328;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    color: #C52A25;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
        color: white;
    }
`