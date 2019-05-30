const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const muiComponent = require('../template/smartMaterialUi')

class MuiCommand extends Command {
  async run() {
    const {flags} = this.parse(MuiCommand)
    const name = flags.name || 'myComponent'
    await fs.writeFile(`${name}.js`, muiComponent(name))
  }
}

MuiCommand.description = `Create a barebones Material-UI React component`

MuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name of file and component'}),
}

module.exports = MuiCommand
