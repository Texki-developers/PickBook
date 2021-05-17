import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import ViewBook from './Components/ViewBook/ViewBook'
import AddIcon from './Components/AddIcon/AddIcon';
import BookList from './Components/BookList/BookList'
import Footer from './Components/Footer/Footer'
import AddBook from './Components/AddBook/Addbook'

function App() {
  return (
    <Router>
      <Header/>
      <AddIcon/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/add-book">
          <AddBook/>
        </Route>
        <Route path="/book">
          <ViewBook/>
        </Route>
        <Route path="/booklist">
          <BookList/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
