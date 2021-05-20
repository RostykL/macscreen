import React from "react";

import { Wrapper } from "../../styled/general";
import { Menu, MenuTitle, Burgers } from "../home/homestyled";
import Burger from "../../component/burger";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Index() {
  const list = useSelector((state) => state.burgerBucket);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(list.burgers);
    if (list.burgers.length > 0) {
      localStorage.setItem("burgersBucket", JSON.stringify(list.burgers));
    } else {
      let burgersBucket = JSON.parse(localStorage.getItem("burgersBucket"));
      dispatch({ type: "ADD_BURGER_BUCKET", payload: burgersBucket });
    }
  }, []);

  return (
    <Wrapper>
      <Menu>
        <MenuTitle>My Bucket</MenuTitle>
        <Burgers>
          {[...list.burgers, { finish: true }, { addMore: true }].map(
            (burger) => {
              if (burger.addMore) {
                return (
                  <Burger
                    key={-2}
                    bg={"lightgreen"}
                    text={"Додати ще"}
                    onClick={() => {
                      history.push("/");
                    }}
                  />
                );
              }
              if (burger.finish) {
                return (
                  <Burger
                    key={-1}
                    bg={"#ff5050"}
                    text={"Завершити"}
                    onClick={() => {
                      dispatch({ type: "REMOVE_BURGERS_BUCKET" });
                      history.push("/");
                    }}
                  />
                );
              }
              if(burger.cost > 0)
              return (
                <Burger
                  key={burger.id}
                  text={burger.name}
                  cost={burger.cost}
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_ONE_BURGER_BUCKET",
                      payload: burger.id,
                    });
                    dispatch({ type: "ADD_BURGER", payload: burger });
                    localStorage.setItem("burger", JSON.stringify(burger));
                    localStorage.setItem(
                      "burgersBucket",
                      JSON.stringify(
                        list.burgers.filter((el) => el.id !== burger.id)
                      )
                    );
                    history.push("/redo");
                  }}
                />
              );
            }
          )}
        </Burgers>
      </Menu>
    </Wrapper>
  );
}
