import React from 'react';
import Year from './component/Year';
import Launches from './component/Launches';
import 'bootstrap/dist/css/bootstrap.min.css';

//Declaring a function with '=>'
const App = () =>{
  return(
    <div className='container'>
      <h1 className='mt-3'>Panel: SpacX Launches</h1>
      <div className='row mt-2'>
        <div className='col-sm'>
          <Year />
        </div>
        <div className='col-sm'>
          <Launches />
        </div>
      </div>
    </div>
  );
};

export default App;
