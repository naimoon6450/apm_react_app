import React from 'react';
import SingleProduct from './SingleProduct';

const Products = (props) => {
    const prods = props.prods;
    const managers = props.managers;
    return (
        <ul className='list-group'>
            {prods.map(prod => {
                return (
                    // send in a prod and the managers
                    <SingleProduct key={prod.id} prod={prod} managers={managers} />
                )
            })}
        </ul>

    )
}

export default Products;