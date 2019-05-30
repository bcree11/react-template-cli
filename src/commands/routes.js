const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const routes = require('../template/routes')

class RoutesCommand extends Command {
  async run() {
    await fs.writeFile(`routes.js`, routes.routing)
  }
}

RoutesCommand.description = `Create a React-Router file`

module.exports = RoutesCommand
