import React from 'react';
import Launches from './Launches';
import Year from './Year';
import LaunchItem from './LaunchItem';
import Chart from './Chart';

class SetData extends React.Component{

    //using state to fetch and store data here
    state = {
        Loading: true,
        launches: [],
        length: 1,
        SuccessCount: 1,
        yearData: [0,0,0,0,0,0]
    }

    // //Hard Coding data for now
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
        var tempYearCount=[0,0,0,0,0,0];
        var tempCount=0;
        data.forEach(element => {
            //Condition Hard Coded for 2014
            if (element.launch_year >= 2014) {
                if(element.launch_success)
                    tempCount++;
                temp.push(element);
                if(element.launch_year<2020){
                    tempYearCount[element.launch_year-2014]++;
                }
            }
          });
        this.setState({ launches: temp ,length: temp.length,yearData: tempYearCount});
        console.log(temp);
        console.log(tempCount);
    }

    render(){
        return( 
            <div className='container'>
                <h1 className='mt-3 text-center'>Panel: SpacX Launches</h1>
                    <div className='row mt-2'>
                        <div className='col-sm'>
                        <Year />
                        </div>
                        <div className='col-sm'>
                        <Launches 
                            SuccessCount={this.state.length} 
                        />
                        </div>
                    </div>

                    {/* Mapping and Getting Data Out */}
                    <h3 className = 'mt-3 text-center'>Launches</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
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
                        <div>
                            {/* Passing props and yearData fetched */}
                            {this.state.Loading?<h3 className='mt-3'>Loading Charts</h3>:<Chart 
                                yearData={this.state.yearData}
                                Loading={this.state.Loading}/>
                            }
                        </div>
                    </div>
            </div>
        );
    };
};

export default SetData;
