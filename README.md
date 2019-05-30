react-quick-template
====================

Quickly create React smart and dumb components, along with a Material-UI template

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/react-quick-template.svg)](https://npmjs.org/package/react-quick-template)
[![Downloads/week](https://img.shields.io/npm/dw/react-quick-template.svg)](https://npmjs.org/package/react-quick-template)
[![License](https://img.shields.io/npm/l/react-quick-template.svg)](https://github.com/bcree11/react-quick-template-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-quick-template
$ rqt COMMAND
running command...
$ rqt (-v|--version|version)
react-quick-template/0.0.0 darwin-x64 node-v11.6.0
$ rqt --help [COMMAND]
USAGE
  $ rqt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rqt help [COMMAND]`](#rqt-help-command)
* [`rqt smart -n name`](#rqt-smart)
* [`rqt dumb -n name`](#rqt-dumb)
* [`rqt routes`](#rqt-routes)
* [`rqt dmui -n name`](#rqt-dmui)
* [`rqt mui -n name`](#rqt-mui)

## `rqt help [COMMAND]`

display help for rqt

```
USAGE
  $ rqt help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `rqt smart`

Create a basic smart React component

```
USAGE
  $ rqt smart

OPTIONS
  -n, --name=name  name of file and component

DESCRIPTION

myComponent.js

import React from 'react'
import './App.css'

export default class MyComponent extends React.Component {
  state = {
  }

  render() {
    const {} = this.state
    return (
      <div>
        <h1>MyComponent Component</h1>
      </div>
    )
  }
}
```

_See code: [src/commands/smart.js](https://github.com/bcree11/react-quick-template-cli/blob/v0.0.0/src/commands/smart.js)_

## `rqt dumb`

Create a basic dumb React component

```
USAGE
  $ rqt dumb

OPTIONS
  -n, --name=name  name of file and component

DESCRIPTION

myComponent.js

import React from 'react'
import './App.css'

const MyComponent = (props) => {
  const {} = props
  return (
    <div>
      <h1>MyComponent Component</h1>
    </div>
  )
}
```

_See code: [src/commands/dumb.js](https://github.com/bcree11/react-quick-template-cli/blob/v0.0.0/src/commands/dumb.js)_

## `rqt routes`

Create a React-Router file

```
USAGE
  $ rqt routes

DESCRIPTION

routes.js

import React from 'react'
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
)
```

_See code: [src/commands/routes.js](https://github.com/bcree11/react-quick-template-cli/blob/v0.0.0/src/commands/routes.js)_

## `rqt dmui`

Create a barebones dumb Material-UI React component

```
USAGE
  $ rqt dmui

OPTIONS
  -n, --name=name  name of file and component

DESCRIPTION

myComponent.js

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    color: 'blue'
  },
})

const MyComponent = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <h1>MyComponent M-UI Component</h1>
    </div>
  )
}

MyComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyComponent)
```

_See code: [src/commands/dmui.js](https://github.com/bcree11/react-quick-template-cli/blob/v0.0.0/src/commands/dmui.js)_

## `rqt mui`

Create a barebones dumb Material-UI React component

```
USAGE
  $ rqt mui

OPTIONS
  -n, --name=name  name of file and component

DESCRIPTION

myComponent.js

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    color: 'blue'
  },
})

class MyComponent extends React.Component {
  state = {
  }

  render() {
    const {} = this.state
    return (
      <div className={classes.root}>
        <h1>MyComponent M-UI Component</h1>
      </div>
    )
  }
}

MyComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyComponent)
```

_See code: [src/commands/mui.js](https://github.com/bcree11/react-quick-template-cli/blob/v0.0.0/src/commands/mui.js)_

<!-- commandsstop -->
