import React, { useContext } from "react";
import { Wrapper } from "../../styled/general";

import { Menu, MenuTitle, Burgers } from "./homestyled";

import { useHistory } from "react-router-dom";

import Burger from "../../component/burger";

import { useBurger } from "../../hooks/useBurger";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [ burgers, error, isLoading ] = useBurger(
    "http://localhost:3000/burgers"
  );


  if (!isLoading) {
    return (
      <Wrapper>
        <Menu>
          <MenuTitle>Menu | BURGERS</MenuTitle>
          <Burgers>
            {burgers.map((burger) => {
              return (
                <Burger
                  text={burger.name}
                  cost={burger.cost}
                  key={burger.id}
                  onClick={() => {
                    dispatch({ type: "ADD_BURGER", payload: burger});
                    history.push("/redo");
                  }}
                />
              );
            })}
          </Burgers>
        </Menu>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Menu>
          <MenuTitle>Menu | BURGERS</MenuTitle>
          <Burgers>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((el) => {
              return <Burger key={el} bg={"rgba(0,0,0,0.2)"} />;
            })}
          </Burgers>
        </Menu>
      </Wrapper>
    );
  }
}
