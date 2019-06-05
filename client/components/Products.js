import React from 'react';
import SingleProduct from './SingleProduct';

const Products = (props) => {
    const products = props.products;
    const managers = props.managers;
    const selectedManagerUpdate = props.selectedManagerUpdate
    const saveManager = props.saveManager;
    return (
        <ul className='list-group'>
            {products.map(prod => {
                return (
                    // send in a prod and the managers
                    <SingleProduct key={prod.id} prod={prod} managers={managers} selectedMU={selectedManagerUpdate} saveManager={saveManager} />
                )
            })}
        </ul>

    )
}

export default Products;