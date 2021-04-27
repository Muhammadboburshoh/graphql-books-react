import {Switch, Route} from 'react-router-dom'

import "./App.css"
import Books from "./componints/Books/books"
import NewBook from "./componints/NewBook/newBook"


function App () {


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Books />
        </Route>

        <Route path="/newbook" exact>
          <NewBook />
        </Route>
        
      </Switch>
    </>
  )
}

export default App