import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Components/Headder/Header'
import ViewBook from './Components/ViewBook/ViewBook'


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
        <Route path="/book">
          <ViewBook/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
