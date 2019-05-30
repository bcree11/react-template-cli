const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const routes = require('../template/routes.js')

class RoutesCommand extends Command {
  async run() {
    await fs.writeFile(`routes.js`, routes.routing)
  }
}

RoutesCommand.description = `Describe the command here
...
Extra documentation goes here
`

RoutesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RoutesCommand
