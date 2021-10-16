import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function Image(){
    var bool=false
    return <div className="bg">
    {/* <div className='input-group position1'>
    <input className='input' type='text' placeholder='Type to search'></input>
    <button className='btn btn-default'><i class="fas fa-search"></i>click</button>
    </div> */}
    <button className='input position1'><strong>Sign in</strong> <ExitToAppIcon className='icon'/> </button>
    
    
    <h2 className='h position'>PAMACT-AR</h2>
    <h4 className='h1 position'>{'A U G M E N T E D '}{' R E A L I T Y'}</h4>
    <br/>
     <h4 className='h2 position'>New site experience</h4>
     <br/>
     <a src='www.google.com'><button className='btn btn-outline-secondary bt position' >GET STARTED</button></a>
    <button className='btn btn-outline-secondary bt position'>DISCOVER</button>
    
    </div>
}

export default Image;