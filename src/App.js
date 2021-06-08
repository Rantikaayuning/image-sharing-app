import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import UserFavorite from './pages/UserFavorite';
import PictureDetail from './pages/PictureDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/favorite' component={UserFavorite}/>
        <Route exact path='/detail/:id' component={PictureDetail}/>
      </Switch>   
    </Router>
  );
}

export default App;
