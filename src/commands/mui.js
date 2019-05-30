const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const muiComponent = require('../template/smartMaterialUi')

class MuiCommand extends Command {
  async run() {
    const {flags} = this.parse(MuiCommand)
    const name = flags.name || 'world'
    await fs.writeFile(`${name}.js`, muiComponent(name))
  }
}

MuiCommand.description = `Describe the command here
...
Extra documentation goes here
`

MuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = MuiCommand
