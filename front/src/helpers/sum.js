export const sumOfToppings = (burger) => {
  let sum = 0;
  for (let i = 0; i < burger.consists_of.length; i++) {
    sum += burger.consists_of[i].cost * burger.consists_of[i].quantity;
  }
  return sum;
};
