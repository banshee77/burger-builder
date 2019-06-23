import React, { useState } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const layout = props => {
    const [sideDrawerIsVisible, setsideDrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = () => {
        setsideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setsideDrawerIsVisible(!sideDrawerIsVisible);
    };

    return (
        <Auxiliary>
            <Toolbar
                isAuth={props.isAuthenticated}
                showSideDrawer={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default withRouter(connect(mapStateToProps)(layout));