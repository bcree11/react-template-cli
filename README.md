react-quick-template
====================

Quickly generat React and Material-Ui component templates. You also have the option
to generate directories and sub-directories.



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/react-quick-template.svg)](https://npmjs.org/package/react-quick-template)
[![Downloads/week](https://img.shields.io/npm/dw/react-quick-template.svg)](https://npmjs.org/package/react-quick-template)
[![License](https://img.shields.io/npm/l/react-quick-template.svg)](https://github.com/bcree11/react-template-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-quick-template
Or for one project
$ npm install i react-quick-template --save-dev

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
* [`rqt hook`](#rqt-hook)
* [`rqt smart`](#rqt-smart)
* [`rqt dumb`](#rqt-dumb)
* [`rqt mui`](#rqt-mui)
* [`rqt dmui`](#rqt-dmui)
* [`rqt routes`](#rqt-routes)


# Directory Tree

```
Example

  $ rqt smart -n src/pages/contact/card

```

Generates:

```
  src
  ├── pages
  │   └── contact
  │       └── card.js

```

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
## `rqt hook`

Create a basic React smart component

```

rqt hook -n example

import React, { useState } from 'react'

function Example() {
  const [] = useState()

  return (
    <div>
      <h1>Example Component</h1>
    </div>
  )
}
```

```
USAGE
  $ rqt smart

OPTIONS
  -n, --name=name  name of file and path
```

## `rqt smart`

Create a basic React smart component

```

rqt smart -n example

import React from 'react'
import './App.css'

export default class Example extends React.Component {
  state = {
  }

  render() {
    const {} = this.state
    return (
      <div>
        <h1>Example Component</h1>
      </div>
    )
  }
}
```

```
USAGE
  $ rqt smart

OPTIONS
  -n, --name=name  name of file and path
```

## `rqt dumb`

Create a basic React dumb component

```

rqt dumb -n example

import React from 'react'
import './App.css'

const Example = (props) => {
  const {} = props
  return (
    <div>
      <h1>Example Component</h1>
    </div>
  )
}
```

```
USAGE
  $ rqt dumb

OPTIONS
  -n, --name=name  name of file and path
```

## `rqt mui`

Create a barebones Material-UI React component

```

rqt mui -n example

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    color: 'blue'
  },
})

class Example extends React.Component {
  state = {
  }

  render() {
    const {} = this.state
    return (
      <div className={classes.root}>
        <h1>Example M-UI Component</h1>
      </div>
    )
  }
}

Example.propTypes = {
classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Example)
```

```
USAGE
  $ rqt mui

OPTIONS
  -n, --name=name  name of file and path
```

## `rqt dmui`

Create a barebones Material-UI React dumb component

```

rqt dumb -n example

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    color: 'blue'
  },
})

const Example = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <h1>Example M-UI Component</h1>
    </div>
  )
}

Example.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Example)
```

```
USAGE
  $ rqt dmui

OPTIONS
  -n, --name=name  name of file and path
```

## `rqt routes`

Create a React-Router file

```

rqt routes

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

```
USAGE
  $ rqt routes
```

# Issues

```
If you want a template or feature added or find any bugs create an
issue and I will take care of it.

```
<!-- commandsstop -->
