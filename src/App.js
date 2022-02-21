import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './CartContainer';
import { AppProvider, GlobalContext } from './context/GlobalContext';

function App() {
  const {loading} = GlobalContext();
  if(loading){
    return (
        <div className='loading'>
            <h2>Loading...</h2>
        </div>
    );
}
  return (
    <div className="App">
    <AppProvider>
      <Navbar />
      <CartContainer />
    </AppProvider>
    </div>
  );
}

export default App;
