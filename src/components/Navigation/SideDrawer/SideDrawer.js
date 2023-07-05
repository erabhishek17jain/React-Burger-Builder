import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxs/Auxs';

const sideDrawer = ( props ) => {
    let attachedClasses = ["sideDrawer", "close"];
    if (props.open) {
        attachedClasses = ["sideDrawer", "open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" />
            <nav>
            <NavigationItems isAuth = {props.isAuth}/>
            </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;