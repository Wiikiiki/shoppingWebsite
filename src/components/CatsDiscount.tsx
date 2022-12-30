import React, { useContext } from "react";
import styles from "./Cat.module.css";
import { appContext, appSetStateContext } from "../AppState";
import { useAddToCart } from "./AddToCart";

interface CatProps {
  id: number;
  name: string;
  email: string;
}

const CatDiscount: React.FC<CatProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const addToCart = useAddToCart();
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}?set=set4`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default CatDiscount;
