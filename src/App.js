import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Portfolio from './portfolio';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch grid={{xs:12}}>
        <Route exact path="/"  component={Portfolio}></Route>
        <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
