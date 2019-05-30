const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const dumbComponent = require('../template/dumb')

class DumbCommand extends Command {
  async run() {
    const {flags} = this.parse(DumbCommand)
    const name = flags.name || 'world'
    await fs.writeFile(`${name}.js`, dumbComponent(name))
  }
}

DumbCommand.description = `Describe the command here
...
Extra documentation goes here
`

DumbCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DumbCommand
