import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Componentes
// import Menu from './Components/Menu'


// Pages
import Login from './pages/login/login'
import Error404 from './pages/error404'
// import Movie from './pages/movie'
// import NewMovies from './pages/newMovies'
// import Popular from './pages/popular'
// import Search from './pages/search'


export default function App() {

  const [user, setUser] = useState([])

  const checkUser = user => {
    console.log(user)
  }

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
          </Route>
          {/* <Route path="/new-movies" exact={true}>
            <NewMovies />
          </Route>
          <Route path="/popular" exact={true}>
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


