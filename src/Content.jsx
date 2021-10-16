import React from 'react';
import './Content.css';
import Footer from './Footer';

function Content(){
    return <div id='#1' className='space'>
        <h1>A new way for your devices to be helpful</h1>
        <p className='p'>Augmented reality overlays digital content and information onto the physical world — as if they’re actually there with you, in your own space. AR opens up new ways for your devices to be helpful throughout your day by letting you experience digital content in the same way you experience the world. It lets you search things visually, simply by pointing your camera at them. It can put answers right where your questions are by overlaying visual, immersive content on top of your real world.</p>
    <br/>
<br/>
<div className='pos '>
 <img className='img pad' src='https://image.freepik.com/free-vector/augmented-reality-background-flat-style_23-2147805693.jpg'>

     </img>
    
<div className='pos1'>
   <h1 className='pad'>AR in Google Search</h1>
   <p className='pad1'>Now you can use AR to place 3D digital objects right in your own space directly from Search or from websites on Chrome. Learn more about everything from NASA’s Curiosity Rover to human anatomy to animals like hedgehogs, penguins, and sharks, with a greater sense of context and scale.</p>
</div>
    </div>
    <div className='pos'>
    <div>
 <h1 className='pad2 pos2'>AR in Apps</h1>
 <p className='pad2 pad3'>Using ARCore, our developer platform, we're working with our developer, creator and brand partners to bring helpful, entertaining, and engaging AR experiences to apps.</p>
 </div>
 <img className='img1' src='https://image.freepik.com/free-vector/augmented-reality-background-with-device_23-2147814406.jpg'></img>
 
    </div>
    
    </div>
}

export default Content;