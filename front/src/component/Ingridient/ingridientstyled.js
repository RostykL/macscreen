import styled from "styled-components";

export const IngridientWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-bottom: 20px; */
  margin: 20px;
`;
export const IngridientButton = styled.button`
    border: 0;
    padding: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${props => props.bg ? props.bg : 'white'};
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
`;

export const IngridientText = styled.div`
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1px;
    color: white;
    font-size: 30px;
`;

export const JustWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const IngridientCount = styled.div`
    margin: 0 30px;
    font-size: 30px;
    color: white;

`