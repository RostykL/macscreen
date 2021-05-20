import React, { useState, useEffect, useContext } from "react";

import {
  IngridientWrapper,
  IngridientButton,
  IngridientText,
  IngridientCount,
  JustWrapper,
} from "./ingridientstyled";


export default function Index({ text, initValue, add, ...props }) {
  let [number, setNumber] = useState(initValue);

  return (
    <IngridientWrapper>
      <IngridientText>{text}</IngridientText>
      <JustWrapper>
        <IngridientButton
          bg={"red"}
          onClick={() => {
            if (number > 0) {
              setNumber(--number);
            }
            console.log(number);
            add(text, number);
          }}
        >
          -
        </IngridientButton>
        <IngridientCount>{number}</IngridientCount>
        <IngridientButton
          bg={"lightgreen"}
          onClick={() => {
            setNumber(++number);
            console.log(number);
            add(text, number);
          }}
        >
          +
        </IngridientButton>
      </JustWrapper>
    </IngridientWrapper>
  );
}
