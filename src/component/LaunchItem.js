import React from 'react';

//to pass props between components
const LaunchItem = (props) =>{
    return(
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.mission_name} 
        <div>
			<span className='badge badge-pill badge-light'>Mission_id: {props.mission_id}</span>
            {/* {props.mission_id} */}
		</div>
    </li>
    );
};

export default LaunchItem;