import React from 'react';

const Managers = (props) => {
    const managers = props.managers;
    const selectedMU = props.selectedMU;
    const prod = props.prod;
    const saveManager = props.saveManager;
    return (
        <div>
            <div className='form-group'>
            <label><em>Product Manager</em></label>
            <select id='managerId' className='form-control' onChange={(selected) => {
                selectedMU(selected.target.value)
            }} >
                <option>-- None --</option>
                {managers.map(pm => {
                    return <option key={pm.id}>{pm.name}</option>
                })}
            </select>
            </div>
            {/* this button should update the manager */}
            <button type='submit' className='btn btn-primary' onClick={() => {
                // change the db
                saveManager(prod.id);
            }} >Save</button>
        </div>   
    )
}

export default Managers;