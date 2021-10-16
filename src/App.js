import logo from './logo.svg';
import './App.css';
import Image from './Image.jsx';
import Content from  './Content';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import Footer from './Footer';

function App() {
  return (
    
    <div className="App ">
<Image/>
<Content/>
<div>
{/* <Footer></Footer> */}
</div>
<footer className='footer'>
<div className='pos follow'>
<p className='i i1'>Follow Us </p>
<YouTubeIcon className='i' /> 
<TwitterIcon className='i'/>
</div>
<hr/>

<div className='pos'>
<div className='col-lg-4 '>
<p className='i2'> <strong>Stay connected with PAMACT-AR</strong></p>
<a className='f ' src='https://developers.googleblog.com/search/label/augmented%20reality'>Google AR blog<AddToHomeScreenIcon/></a>
</div>

<div className='col-lg-6 '>
<div className='tab'>
  <p className='i2'><strong>AR & VR</strong></p>
  <p className='f'><a>Augmented Reality</a></p>
  <p className='f'><a>Virtual Reality</a></p>
  </div>
</div>
 </div>
<hr/>
    <h4 className='f h4 follow'>PAMACT-AR</h4>
      </footer>
    </div>
  );
}

export default App;
