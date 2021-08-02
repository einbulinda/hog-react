import Header from './components/Header'
import './App.scss';
import 'bulma/css/bulma.min.css'
import {Button} from 'react-bulma-components'

function App() {
  return (
    <div className="App">
      <Header/>
      <Button color="primary">Bulma Button</Button>
    </div>
  );
}

export default App;
