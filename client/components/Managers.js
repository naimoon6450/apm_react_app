import React from 'react';

const Managers = (props) => {
    const managers = props.managers;
    const selectedMU = props.selectedMU;
    const prod = props.prod;
    const saveManager = props.saveManager;
    let defaultVal;
    managers.map(pm => {
        if (prod.managerId && prod.managerId === pm.id) defaultVal = pm.name;
    })
    return (
        <div>
            <div className='form-group'>
            <label><em>Product Manager</em></label>
            <select id='managerId' defaultValue={prod.managerId ? defaultVal : ''} className='form-control' onChange={(selected) => {
                selectedMU(selected.target.value)}} >
                <option>-- None --</option>
                {managers.map(pm => {
                    return <option key={pm.id} value={pm.name} >{pm.name}</option>
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