module.exports = {
  routing: `import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/some-route' component={SomeComponent}/>
      <Route path='/' component={Home}/>
    </Switch>
  </BrowserRouter>
)`
}
