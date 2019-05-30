const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const smartNameComponent = require('../template/smart')

class SmartCommand extends Command {
  async run() {
    const {flags} = this.parse(SmartCommand)
    const name = flags.name || 'myComponent'
     await fs.writeFile(`${name}.js`, smartNameComponent(name))
  }
}

SmartCommand.description = `Create a basic React smart component`

SmartCommand.flags = {
  name: flags.string({char: 'n', description: 'name of file and component'}),
}

module.exports = SmartCommand
