import React from 'react';

//to pass props between components
const LaunchItem = (props) =>{
    return(
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.mission_name} 
        <div>
			<span className='badge badge-pill badge-light'>Flight_No: {props.flight_number}</span>
            {/* {props.mission_id} */}
		</div>
    </li>
    );
};

export default LaunchItem;