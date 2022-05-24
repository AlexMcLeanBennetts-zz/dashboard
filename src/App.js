import logo from './logo.svg';
import './App.css';
import './styles/output.css';
import { useGlobalContext } from './context';

function App() {
  const { policyInformation } = useGlobalContext();
  console.log(policyInformation);
  return (
    <div className="App">
      <Dashboard policyData={policyInformation} />
    </div>
  );
}

export default App;
