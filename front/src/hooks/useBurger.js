import React, { useEffect, useState } from "react";

export function useBurger(url) {
  const [burgers, setBurgers] = useState([]);
  const [error, setError] = useState({ msg: "", status: false });
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBurgers(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        setError({ msg: "Виникла помилка" + e, status: true });
      });
  }, [url]);

  return [ burgers, error, isLoading ];
}
