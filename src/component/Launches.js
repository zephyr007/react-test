import React from 'react';

const Launches = (props) => {
    return(
        <div className ='alert alert-info'>
            <span>No of Launches: {props.SuccessCount}</span>
        </div>
    );
};

export default Launches;