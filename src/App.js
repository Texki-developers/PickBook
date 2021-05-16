import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Components/Headder/Header'
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <h1>home</h1>
        </Route>
        <Route path="/add-book">
          <h1>Add book</h1>
        </Route>
        <Route path="book">
          <h1>view book</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
