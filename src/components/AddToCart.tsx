import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { CatProps } from "./Cats";

export const withAddToCart = (
  ChildComponent: React.ComponentType<CatProps>
) => {
  // return class extends React.Component{}
  return (props) => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCart;
};
