import React, { useContext, useEffect, useState } from "react";
import { BurgerContext } from "../context/burgerContext";
import { Burgers } from "../pages/home/homestyled";

export default function useToppings(db_url, burger_toppings) {
  const [toppings, setToppings] = useState([]);
  const [allToppings, setAllToppings] = useState();
  const [error, setError] = useState({ msg: "", status: false });
  const [isLoading, setIsLoading] = useState(true);

  const difference = (toppings, my_toppings) => {
    let tmpToppings = toppings;
    for (let i = 0; i < toppings.length; i++) {
      for (let j = 0; j < my_toppings.length; j++) {
        if (toppings[i].name === my_toppings[j].name && my_toppings[j].quantity > 0) {
            tmpToppings[i].quantity = my_toppings[j].quantity;
        }
      }
    }
    tmpToppings = tmpToppings.sort((a,b) => b.quantity - a.quantity)
    return tmpToppings;
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(db_url)
      .then((res) => res.json())
      .then((res) => {
        setAllToppings(res)
        let newToppings = difference(res, burger_toppings);
        setToppings(newToppings);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        setError({ msg: "Виникла помилка" + e, status: true });
      });
  }, [db_url]);

  return { toppings, error, isLoading, allToppings};
}
