import React from 'react';
import LaunchItem from './LaunchItem';

class LaunchList extends React.Component{

    //using states here
    state = {
        Loading: true,
        launches: []
    }

    // launches = [
    //             {flight_number:0, mission_name: 'Launch 0', mission_id: 0},
    //     //         {flight_number:1, mission_name: 'Launch 1', mission_id: 1},
    //     //         {flight_number:2, mission_name: 'Launch 2', mission_id: 2},
    //     //         {flight_number:3, mission_name: 'Launch 3', mission_id: 3},
    //     //         {flight_number:4, mission_name: 'Launch 4', mission_id: 4},
    //     //         {flight_number:5, mission_name: 'Launch 5', mission_id: 5},
    //     //         {flight_number:6, mission_name: 'Launch 6', mission_id: 6}
    //         ]

    //Used Async and await to get response or we could have also used axios or fetch() but we also had to code .then() and .catch()
    async componentDidMount() {
        const url="https://api.spacexdata.com/v3/launches";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({Loading: false});
        var temp=[];
        data.forEach(element => {
            //Condition Hard Coded for 2014
            if (element.launch_year > 2014) {
              temp.push(element);
            }
          });
        this.setState({ launches: temp });
        console.log(temp);
    }

    render(){
        return(
            <div>
                {this.state.Loading? <h3 className='mt-3'>Loading..</h3>:<ul className="list-group">
                {this.state.launches.map(((launches)=>(
                    <LaunchItem 
                        flight_number ={launches.flight_number} 
                        mission_name ={launches.mission_name}
                        mission_id ={launches.mission_id}
                    />
                )))}
            </ul> }
            </div>
            
        );
    }
}
// const LaunchList = () =>{
//     const launches = [
//         {flight_number:0, mission_name: 'Launch 0', mission_id: 0},
//         {flight_number:1, mission_name: 'Launch 1', mission_id: 1},
//         {flight_number:2, mission_name: 'Launch 2', mission_id: 2},
//         {flight_number:3, mission_name: 'Launch 3', mission_id: 3},
//         {flight_number:4, mission_name: 'Launch 4', mission_id: 4},
//         {flight_number:5, mission_name: 'Launch 5', mission_id: 5},
//         {flight_number:6, mission_name: 'Launch 6', mission_id: 6}
//     ]

    
// };

export default LaunchList;