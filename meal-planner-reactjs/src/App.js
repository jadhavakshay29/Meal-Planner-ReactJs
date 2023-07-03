import './App.css';
import Form from './Components/Form/Form';
import NavBar from './Components/Header/NavBar';
import Steps from './Components/Steps-section/steps';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Steps/>
        <Form/>
    </div>
  );
}

export default App;