import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Card from './components/Card'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Covid19 Stats OF USA</h1>
        <Card></Card>
      </div>
    </Provider>
  );
}

export default App;
