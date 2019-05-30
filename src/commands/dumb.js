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

DumbCommand.description = `Create a basic React dumb component`

DumbCommand.flags = {
  name: flags.string({char: 'n', description: 'name of file and component'}),
}

module.exports = DumbCommand
