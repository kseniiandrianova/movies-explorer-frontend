import React from "react";
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';



export default  function App() {
  const [isMenuOpened, setMenuOpened] = React.useState(false);
  const [isMenuIcon, setMenuIconOpen] = React.useState(false);
  const [isMenuCloseIcon, setMenuCloseIconOpen] = React.useState(false);

function handleMenuClick() {
  setMenuOpened(true);
  setMenuIconOpen(true);
  setMenuCloseIconOpen(true);
}

function closeAllPopups() {
  setMenuOpened(false);
  setMenuIconOpen(false);
  setMenuCloseIconOpen(false);
}


return (
  <div className="page">
    <Header onClose={closeAllPopups}
        isOpen ={isMenuOpened && 'header_opened'} 
        onMenu={handleMenuClick} 
        isMenuIcon={isMenuIcon && 'header_closed'}
        isMenuCloseIcon={isMenuCloseIcon ? 'header_opened' : 'header_closed'} />
    <Route path = '/signup'>
      <Register />
    </Route>
    <Route path = '/signin'>
      <Login />
    </Route>
    <Switch>
      <Route exact path = '/'>
        <Main />
      </Route>
      <Route path = '/profile'>
        <Profile isOpen = {isMenuOpened && 'popup_opened'} onClose={closeAllPopups} />
      </Route>
      <Route path = '/movies'>
        <Movies isOpen = {isMenuOpened && 'popup_opened'} onClose={closeAllPopups} />
      </Route>
      <Route path = '/saved-movies'>
        <Movies isOpen = {isMenuOpened && 'popup_opened'} onClose={closeAllPopups} />
      </Route>
    </Switch>
      <Footer />     
      </div>
);
}