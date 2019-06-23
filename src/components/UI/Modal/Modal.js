import React from 'react';
import classes from './Modal.module.css';
import Auxilriary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {

    return (
        <Auxilriary>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed}>
            </Backdrop>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Auxilriary>
    );
}

export default React.memo(
    modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children);