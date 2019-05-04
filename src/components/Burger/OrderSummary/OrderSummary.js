import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // This could be a functional component
    componentWillUpdate() {
        // console.log('[OrderSummary] Will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKeys => {
                return <li key={igKeys}>
                    <span style={{ textTransform: "capitalize" }}>{igKeys}</span>: {this.props.ingredients[igKeys]}
                </li>
            });

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burder with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <b>{this.props.price.toFixed(2)}</b></p>
                <p>Continue to checkout ?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        )
    }
};

export default OrderSummary;