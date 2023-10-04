import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="음식주문 페이지의 메인 이미지"/>
    </div>
  </Fragment>;
};

export default Header;
