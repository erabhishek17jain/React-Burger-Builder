import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="navigationItems">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuth ?
            <NavigationItem link="/orders">My Orders</NavigationItem> :
            null}
        <NavigationItem link="/checkout">Checkout</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        {!props.isAuth ?
            <NavigationItem link="/auth">SignIn</NavigationItem>:
            <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;