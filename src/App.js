import React,{useState,useEffect, createContext, useContext} from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Details from './components/Details/Details'

import './App.css'

export const Context = createContext()

function App() {

  const [posts, setPosts] = useState([])
  const [postData, setPostData] = useState({})
  const [searching, setSearching] = useState(false)





    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const fetchApi = async () => {
            const res = await axios.get(url)
            console.log(res.data)
            setPosts(res.data)
        }
        fetchApi()
    }, [])



  return (
    <Context.Provider value={postData, setPostData}>
    <Router>
      <Route>
        <Header />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path='/details'>
          <Details/>
        </Route>
      </Switch>
    </Router>
    </Context.Provider>


  );
}

export default App;
