import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'

// Componentes
// import Menu from './Components/Menu'


// Pages
import Home from './pages/home'
import Login from './pages/login/login'
import Error404 from './pages/error404'
import ClienteNuevo from './pages/cliente-nuevo'
// import Popular from './pages/popular'
// import Search from './pages/search'


export default function App() {

  // const [userFirebase, setUserFirebase] = useState(undefined)

  const checkUser = user => {
    const email = user.email
    const password = user.password
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    })
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
      // setUserFirebase(user)
      // User is signed in.
    } else {
      console.log(user)
      // No user is signed in.
    }
  });

  return (
    <div>
      <Router> 
        <Switch>
          <Route path="/" exact={true}>
            <Container style={{ zIndex: 1 }}>
            <Login 
              checkUser={checkUser} 
            />
            </Container>
          </Route> : 
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/cliente-nuevo" exact={true}>
            <ClienteNuevo />
          </Route>
          {/* <Route path="/popular" exact={true}>
            <Popular />
          </Route>
          <Route path="/search" exact={true}>
            <Search />
          </Route>
          <Route path="/movie/:id" exact={true}>
            <Movie />
          </Route> */}
          <Route path="*" >
            <Error404 />
          </Route>
        </Switch>
      {/* </Content> */}
      </Router>
    </div>
  );
}


