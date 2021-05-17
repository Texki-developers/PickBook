import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Headder/Header'
import AddBook from './Components/AddBook/Addbook'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/add-book">
          <AddBook/>
        </Route>
        <Route path="book">
          <h1>view book</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
