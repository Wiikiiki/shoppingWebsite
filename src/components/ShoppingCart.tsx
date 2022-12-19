// 使用 class 组件

import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleClick = this.handleClick.bind(this); 不建议使用
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log("e.target", e.target);  事件发生的元素
    // console.log("e.currentTarget", e.currentTarget);

    // if ((e.target as HTMLElement).nodeName === "SPAN") {}
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>购物车（2）</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>cat 1</li>
            <li>cat 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
