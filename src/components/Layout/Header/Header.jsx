import { Fragment } from "react";
import mealsImg from "../../../assets/meals.jpg";
import { HeaderCartButton } from "../HeaderCartButton/HeaderCartButton";
import "./Header.css";

export const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="Delicious food!" />
      </div>
    </Fragment>
  );
};
