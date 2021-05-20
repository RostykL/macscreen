import React, {useEffect} from "react";

import { Wrapper, Text, Price } from "./ingridientsdetailblockstyled";

export default function Index({ text, price, qty }) {
  return (
    <Wrapper>
      <Text>{text} [{qty} штук]</Text>
      <Price>{price}грн.</Price>
    </Wrapper>
  );
}
