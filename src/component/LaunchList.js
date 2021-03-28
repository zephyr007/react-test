import React from 'react';
import LaunchItem from './LaunchItem';

const LaunchList = () =>{
    const launches = [
        {flight_number:0, mission_name: 'Launch 0', mission_id: 0},
        {flight_number:1, mission_name: 'Launch 1', mission_id: 1},
        {flight_number:2, mission_name: 'Launch 2', mission_id: 2},
        {flight_number:3, mission_name: 'Launch 3', mission_id: 3},
        {flight_number:4, mission_name: 'Launch 4', mission_id: 4},
        {flight_number:5, mission_name: 'Launch 5', mission_id: 5},
        {flight_number:6, mission_name: 'Launch 6', mission_id: 6}
    ]

    return(
        <ul class="list-group">
            {launches.map(((launches)=>(
                <LaunchItem 
                    flight_number ={launches.flight_number} 
                    mission_name ={launches.mission_name}
                    mission_id ={launches.mission_id}
                />
            )))}
        </ul>
    );
};

export default LaunchList;