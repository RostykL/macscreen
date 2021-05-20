import styled from "styled-components";

export const BurgerIngridients = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  padding-top: 25 0px;
  flex: 1;
`;

export const IngridientWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  position: relative;
`;

export const BurgerDetails = styled.div`
  height: calc(100% - 50px);
  flex: 0.6;
  height: 100%;
  padding-bottom: 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  border-left: 1px solid rgba(0,0,0,0.3);
`

export const DetailsTitle = styled.div`
    color: white;
    text-transform: uppercase;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DetailsButtonContinue = styled.div`
  color: lightgreen;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const IngridientsDetails = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0;
  position: relative;
`

export const Total = styled.div`
  color: black;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: lightgreen;
`