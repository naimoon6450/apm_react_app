import React from 'react';
import Manager from './Managers';

const SingleProduct = (props) => {
    const prod = props.prod;
    const managers = props.managers;
    const selectedMU = props.selectedMU;
    const saveManager = props.saveManager;
    return(
        <div key={prod.id}>
            <li className='list-group-item'>
                <h6>{prod.name}</h6>
                    <Manager managers={managers} selectedMU={selectedMU} prod={prod} saveManager={saveManager} />
            </li>
        </div>
    )
}

export default SingleProduct;