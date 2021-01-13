
import './App.css';
import MainPage from './components/MainPage';
import 'materialize-css/dist/css/materialize.min.css';
import desktopBackground from './images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg';
import mobileBackground from './images/portraitBackground.jpg'




function App() {
  // const imageUrl = window.innerWidth >= 650 ? desktopBackground  : mobileBackground;
  return (
    // <div style={{ backgroundImage: `url(${imageUrl})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize:'cover',
    // backgroundPosition: 'center',
    // width: '100vw',
    // height: '100vh'
    // }}>
        
 < MainPage />
      
    
  );
}

export default App;
