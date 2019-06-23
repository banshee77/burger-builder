import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return <li key={igKeys}>
                <span style={{ textTransform: "capitalize" }}>{igKeys}</span>: {props.ingredients[igKeys]}
            </li>
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burder with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <b>{props.price.toFixed(2)}</b></p>
            <p>Continue to checkout ?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    )
}

export default orderSummary;