import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import cats from "./mockdata/robots.json";
import Cat from "./components/Cats";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  catGallery: any[];
  count: number;
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      catGallery: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ catGallery: data }));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>猫猫购物平台！</h1>
        </div>
        {/* 理解 setState 的伪异步 */}
        {/* <button
          onClick={() => {
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log("count:", this.state.count);
              }
            );
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log("count:", this.state.count);
              }
            );
          }}
        >
          click
        </button>
        <div>count: {this.state.count}</div> */}
        <ShoppingCart />
        <div className={styles.catList}>
          {this.state.catGallery.map((c) => (
            <Cat id={c.id} email={c.email} name={c.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
