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
$ rqt COMMAND
running command...
$ rqt (-v|--version|version)
react-quick-template/0.0.1 darwin-x64 node-v11.6.0
$ rqt --help [COMMAND]
USAGE
  $ rqt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rqt dmui`](#rqt-dmui)
* [`rqt dumb`](#rqt-dumb)
* [`rqt help [COMMAND]`](#rqt-help-command)
* [`rqt mui`](#rqt-mui)
* [`rqt routes`](#rqt-routes)
* [`rqt smart`](#rqt-smart)

## `rqt dmui`

Create a barebones Material-UI React dumb component

```
USAGE
  $ rqt dmui

OPTIONS
  -n, --name=name  name to print
```

_See code: [src/commands/dmui.js](https://github.com/bcree11/react-template-cli/blob/v0.0.1/src/commands/dmui.js)_

## `rqt dumb`

Create a basic React dumb component

```
USAGE
  $ rqt dumb

OPTIONS
  -n, --name=name  name of file and component
```

_See code: [src/commands/dumb.js](https://github.com/bcree11/react-template-cli/blob/v0.0.1/src/commands/dumb.js)_

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

## `rqt mui`

Create a barebones Material-UI React component

```
USAGE
  $ rqt mui

OPTIONS
  -n, --name=name  name of file and component
```

_See code: [src/commands/mui.js](https://github.com/bcree11/react-template-cli/blob/v0.0.1/src/commands/mui.js)_

## `rqt routes`

Create a React-Router file

```
USAGE
  $ rqt routes
```

_See code: [src/commands/routes.js](https://github.com/bcree11/react-template-cli/blob/v0.0.1/src/commands/routes.js)_

## `rqt smart`

Create a basic React smart component

```
USAGE
  $ rqt smart

OPTIONS
  -n, --name=name  name of file and component
```

_See code: [src/commands/smart.js](https://github.com/bcree11/react-template-cli/blob/v0.0.1/src/commands/smart.js)_
<!-- commandsstop -->
