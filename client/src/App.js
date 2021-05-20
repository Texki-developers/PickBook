import {useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import ViewBook from './Components/ViewBook/ViewBook'
import AddIcon from './Components/AddIcon/AddIcon';
import { useSelector , useDispatch} from 'react-redux';
import Filter from './Components/Filter/Filter'
import BookList from './Components/BookList/BookList'
import Footer from './Components/Footer/Footer'
import AddBook from './Components/AddBook/Addbook'
import MobileFooter from './Components/MobileFooter/MobileFooter';
import PreLoader from './Components/PreLoader/PreLoader';
import instance from './Assets/server/instance';
import Actions from './Assets/Essentials/EssentialAction'

function App() {

  const filter = useSelector(state => state.essentials);
  const dispatch = useDispatch();

  useEffect(()=>{
    const checkUser = async()=>{
      const userData = await instance.get('/checkuser');
      console.log(userData.data)
      if(userData.data.status){
        dispatch(Actions.addUserData(userData.data.data))
      }
    }
    checkUser()
    
  },[dispatch])

  return (
    <Router>
      {filter.filter?<Filter/>:null}
      <MobileFooter/>
      {filter.headAndFootShow?<Header/>:null}
      {filter.addIcon?<AddIcon/>:null}
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
        <Route path="/loading">
          <PreLoader/>
        </Route>
      </Switch>
      {filter.headAndFootShow?<Footer/>:null}
    </Router>
  );
}

export default App;
