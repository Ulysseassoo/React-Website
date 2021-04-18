import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './Pages/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/home" exact component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
