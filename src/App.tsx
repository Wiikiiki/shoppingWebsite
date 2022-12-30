import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
// import cats from "./mockdata/robots.json";
import Cat from "./components/Cats";
import CatDiscount from "./components/CatsDiscount";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

// interface State {
//   catGallery: any[];
//   count: number;
// }

const App: React.FC<Props> = (props) => {
  // const [count, setCount] = useState<number>(0);
  const [catGallery, setCatGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  // useEffect(() => {
  //   document.title = `点击了${count}次`;
  // }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // .then((response) => response.json())
        // .then((data) => setCatGallery(data));
        const data = await responses.json();
        setCatGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>猫猫购物平台！</h1>
      </div>
      <h2>{}</h2>
      {/* 理解 setState 的伪异步 */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <div>count: {count}</div> */}
      <ShoppingCart />
      {error && <div>网站出错! {error}</div>}
      {!loading ? (
        <div className={styles.catList}>
          {catGallery.map((c, index) =>
            index % 2 == 0 ? (
              <CatDiscount id={c.id} email={c.email} name={c.name} />
            ) : (
              <Cat id={c.id} email={c.email} name={c.name} />
            )
          )}
        </div>
      ) : (
        <h2>loading 加载中</h2>
      )}
    </div>
  );
};

export default App;
