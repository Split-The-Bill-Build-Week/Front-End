import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";

const OrderStyle = styled.div`
    text-align: center;
    margin: 2em auto;

    h3 {
        padding: 0 5em;
        border-bottom: 2px solid black;
    }

    td {
        border: 1px solid grey;
        padding: 0 2em;
    }

`

const Order =({ ordered, handleDelete }) => {
    
    // const [total, setTotal] = useState(0)

    // ordered.map((orders => (
    //     setTotal(orders.price)
    // )));

    //setTotal(orders.price)
    console.log(ordered);
    const priceArray = ordered.map((orders => (
        Number(orders.plates) * orders.price
    )))
    const platesArray = ordered.map((orders => (
        Number(orders.plates)
    )))

    return (
        <OrderStyle>
            <tr>
                <th><h3>Person</h3></th>
                <th><h3>Meal Ordered</h3></th>
                <th><h3>Plates</h3></th>
                <th><h3>Price/Plate</h3></th>
            </tr>
            {ordered.map((orders => (
                <tr key={orders.name}>
                    <td>{orders.name}</td>
                    <td>{orders.order}</td>
                    <td>{orders.plates}</td>
                    <td>{orders.price}</td>
                    <Button onClick={() => handleDelete(orders)}>Delete</Button>
                </tr>
            )))}
            {
                !ordered.length ? null : 
                <tr>
                    <td><h3>Total Amount</h3></td>
                    <td>---</td>
                    <td>
                        {
                            platesArray.reduce((a,b) => a+b, 0)
                        }
                    </td>
                    <td>
                        {
                            priceArray.reduce((a,b) => a+b, 0)
                        }
                    </td>
                </tr>
            }
        </OrderStyle>
    )
}

export default Order;