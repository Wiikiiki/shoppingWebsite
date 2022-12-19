import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import cats from "./mockdata/robots.json";
import Cat from "./components/Cats";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>猫猫购物平台！</h1>
      </div>
      <ShoppingCart />
      <div className={styles.catList}>
        {cats.map((c) => (
          <Cat id={c.id} email={c.email} name={c.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
