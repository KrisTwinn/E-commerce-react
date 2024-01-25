import React, { Suspense } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Login from './pages/login/login.component';
import Articoli from './pages/articoli/articoli.component';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect} from 'react';
import { auth, getProdotti } from './firebase/firebase.data';
import { connect, useDispatch } from 'react-redux';
import { checkUserLog } from './redux/user/user.actions';
import Loader from './components/loader/loader.component.jsx';

const Cassa = React.lazy(() => import('./pages/cassa/cassa.component.jsx'));
function App(user, setLoggedUser) {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(userAuth =>{
    unsubscribe();
    setLoggedUser(userAuth);
  })
  //saveProductIntoDatabase(categorie)
  }, [setLoggedUser])

  useEffect(() =>{
    dispatch(getProdotti());
  }, [dispatch])


  
  return (
    <Router>
      <div className="App">
        <Header/>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop/*" element={<Articoli />} />
              <Route path="/checkout" element={<Cassa />} />
              <Route path="/login" element={user != null ? (<Navigate to ='/' />) : (<Login />)} />
            </Routes>
          </Suspense>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.loggedUser
})

const mapDispatchToProps = (state) => ({
  setLoggedUser: (user) => dispatchEvent(checkUserLog(user))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);