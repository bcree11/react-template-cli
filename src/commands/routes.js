const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const routes = require('../template/routes')
const chalk = require('chalk')

class RoutesCommand extends Command {
  async run() {
    await fs.writeFile(`routes.js`, routes.routing)
    console.log(chalk.green(`Generated routes.js`))
  }
}

RoutesCommand.description = `Create a React-Router file`

module.exports = RoutesCommand
