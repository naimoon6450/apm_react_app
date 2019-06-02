import React from 'react';

const SingleProduct = (props) => {
    const prod = props.prod;
    const managers = props.managers
    return(
        <div key={prod.id}><li className='list-group-item'>
            <h6>{prod.name}</h6>
            <div className='form-group'>
                <label><em>Product Manager</em></label>
                <select name='managerId' className='form-control'>
                    <option>-- None --</option>
                    {managers.map(pm => {
                        return <option key={pm.id}>{pm.name}</option>
                    })}
                </select>
            </div>
            <button className='btn btn-primary'>Save</button>
            </li>
            <br></br>
        </div>
    )
}

export default SingleProduct;