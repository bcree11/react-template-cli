const {Command, flags} = require('@oclif/command')
const routes = require('../template.js')

class RoutesCommand extends Command {
  async run() {
    await fs.writeFile(`routes.js`, routes)
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
