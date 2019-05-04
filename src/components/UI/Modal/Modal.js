import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auxilriary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    componentWillUpdate() {
        // console.log('[Modal] Will update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }    

    render() {
        return (
            <Auxilriary>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}>
                </Backdrop>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translate(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Auxilriary>
        );
    }
};

export default Modal;