import './App.css'
import Banner from './Components/Banner';
import FirstMenu from './Components/FirstMenu';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Order from './Components/Order';
import Popular from './Components/Popular';
import Process from './Components/Process';
import Search from './Components/Search';

function App() {


  return (
    <div>
      <Header/>
      <Banner/>
      <FirstMenu/>
      <Process/>
      <Search/>
      <Order/>
      <Popular/>
      <Footer/>
    </div>
    
  )
}

export default App;
