import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import ViewBook from './Components/ViewBook/ViewBook'
import AddIcon from './Components/AddIcon/AddIcon';
import { useSelector } from 'react-redux';
import Filter from './Components/Filter/Filter'
function App() {
  const filter = useSelector(state => state.filter)
  return (
    <Router>
      {filter?<Filter/>:''}
      <Header/>
      <AddIcon/>
      <Switch>
        <Route path="/" exact>
          <Home/>
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
