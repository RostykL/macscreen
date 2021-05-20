import React, { useEffect, useState, useContext } from "react";

import { Wrapper } from "../../styled/general";
import { Menu, MenuTitle } from "../home/homestyled";
import {
  BurgerIngridients,
  IngridientWrapper,
  BurgerDetails,
  DetailsTitle,
  IngridientsDetails,
  Total,
  DetailsButtonContinue,
} from "./burgerredostyled";
import Ingridient from "../../component/Ingridient";
import IngridientdetailBlock from "../../component/IngridientsDetailBlock";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useBurger } from "../../hooks/useBurger";

import { sumOfToppings } from "../../helpers/sum";

export default function Index() {
  const burger = useSelector((state) => state.burger);
  const [toppings, error, isLoading] = useBurger(
    "http://localhost:3000/toppings"
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (burger.id) {
      localStorage.setItem("burger", JSON.stringify(burger));
    } else {
      let localStorageBurger = JSON.parse(localStorage.getItem("burger"));
      dispatch({ type: "ADD_BURGER", payload: localStorageBurger });
    }

    for (let i = 0; i < toppings.length; i++) {
      for (let j = 0; j < burger.consists_of.length; j++) {
        if (burger.consists_of[j].name === toppings[i].name) {
          toppings[i].quantity = burger.consists_of[j].quantity;
        }
      }
    }

    if (toppings.length > 0) {
      dispatch({
        type: "ADD_BURGER",
        payload: { ...burger, consists_of: toppings },
      });
    }
  }, [isLoading]);

  const add = (text, num) => {
    for (let i = 0; i < toppings.length; i++) {
      if (toppings[i].name === text) {
        toppings[i].quantity = num;
      }
    }
    dispatch({
      type: "ADD_BURGER",
      payload: { ...burger, consists_of: toppings },
    });
    localStorage.setItem(
      "burger",
      JSON.stringify({ ...burger, consists_of: toppings })
    );
  };

  if (!isLoading)
    return (
      <Wrapper>
        <Menu>
          <MenuTitle>{burger && burger.name}</MenuTitle>
          <IngridientWrapper>
            <BurgerIngridients>
              {burger.consists_of.map(({ name, quantity, id }) => {
                return (
                  <Ingridient
                    key={id}
                    text={name}
                    add={add}
                    initValue={quantity}
                  />
                );
              })}
            </BurgerIngridients>
            <BurgerDetails>
              <DetailsTitle>
                <span>{burger && burger.name} | інформація</span>{" "}
                <DetailsButtonContinue
                  onClick={() => {
                    dispatch({
                      type: "ADD_BURGER_BUCKET",
                      payload: { ...burger, cost: sumOfToppings(burger), id: new Date() },
                    });
                    history.push("/bucket");
                  }}
                >
                  продовжити
                </DetailsButtonContinue>
              </DetailsTitle>
              <IngridientsDetails>
                {burger.consists_of
                  .filter((el) => el.quantity > 0)
                  .map((el) => {
                    return (
                      <IngridientdetailBlock
                        key={el.id}
                        text={el.name}
                        price={el.quantity * el.cost}
                        qty={el.quantity}
                      ></IngridientdetailBlock>
                    );
                  })}
              </IngridientsDetails>
              <Total>Загалом {sumOfToppings(burger)}(грн.)</Total>
            </BurgerDetails>
          </IngridientWrapper>
        </Menu>
      </Wrapper>
    );

  if (isLoading) {
    return <span>loading</span>;
  }
}
