import './App.css';
import StyledButton,{FancyButton} from './components/Button/Button';


function App() {
  return (
    <div className="App">
      <StyledButton>StyledButton</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline'>StyledButton</StyledButton>
      <div>
        <br/>
      <FancyButton>FancyButton</FancyButton>
      </div>
    </div>
  );
}

export default App;
