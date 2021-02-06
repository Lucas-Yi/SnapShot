import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import React from "react"
import Item from "./component/Item"
import Header from "./component/Header"

function App() {

  return <BrowserRouter>
    <Route render={
      props=>(
        <Header history={props.history}/>
      )}
    />
    <Switch>
      <Route 
        exact 
        path='/'
        render={()=> <Redirect to='/mountain'/>}  
      />
      <Route path='/mountain' render={()=> <Item searchTerm="mountain"/>} />
      <Route path='/beach' render={()=> <Item searchTerm="beach"/>} />
      <Route path='/bird' render={()=> <Item searchTerm="bird"/>} />
      <Route path='/food' render={()=><Item searchTerm="food"/>}/>
      <Route 
        path='/search/:searchContent'
        render={(props)=><Item searchTerm={props.match.params.searchContent}/>}
      />
    </Switch>
  </BrowserRouter>
    
}

export default App;
