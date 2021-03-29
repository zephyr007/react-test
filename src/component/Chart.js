import React from 'react';
import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2';

class Chart extends React.Component{

    //if we have to pass on Props make a constructor function
    constructor(props){
        super(props);
        this.state ={
            Loading: true,
            ChartData:{
            }
        }
    }

    componentWillReceiveProps(props) {
        // Update the chart with new data every time we receive props.
        var temp_ChartData={
            labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
            label: '# of Launches',
            data:props.yearData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        }
        this.setState({ChartData:temp_ChartData,Loading:props.Loading});
      }


    render(){
        return (<div>
            <div className="card">
                <h3 className='mt-3 text-center'>Charts</h3>
                {this.state.Loading?<h3>Loading Charts</h3>:
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Doughnut 
                        data={this.state.ChartData}
                        options={{}} 
                        />
                    </li>
                    <li className="list-group-item">
                        <Line 
                        data={this.state.ChartData}
                        options={{}} 
                        />
                    </li>
                    <li className="list-group-item">
                        <Bar 
                        data={this.state.ChartData}
                        options={{}} 
                        />
                    </li>
                    <li className="list-group-item">
                        <Pie 
                        data={this.state.ChartData}
                        options={{}} 
                        />
                    </li>
                </ul>}
            </div>
        </div>);
    }
}

export default Chart;