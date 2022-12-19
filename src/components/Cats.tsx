import React from "react";
import styles from "./Cat.module.css";

interface CatProps {
  id: number;
  name: string;
  email: string;
}

const Cat: React.FC<CatProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}?set=set4`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Cat;
