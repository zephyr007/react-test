import React from 'react';

const Success = (props) => {
    return(
        <div className ='alert alert-success'>
            <span>No of Success: {props.SuccessCount}</span>
        </div>
    );
};

export default Success;