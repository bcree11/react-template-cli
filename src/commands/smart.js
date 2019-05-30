const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const smartNameComponent = require('../template/smart')

class SmartCommand extends Command {
  async run() {
    const {flags} = this.parse(SmartCommand)
    const name = flags.name || 'mySmartComponent'
    await fs.writeFile(`${name}.js`, smartNameComponent(name))
  }
}

SmartCommand.description = `Describe the command here
...
Extra documentation goes here
`

SmartCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SmartCommand
