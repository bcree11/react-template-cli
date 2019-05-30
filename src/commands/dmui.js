const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const dmuiComponent = require('../template/dumbMaterialUi')

class DmuiCommand extends Command {
  async run() {
    const {flags} = this.parse(DmuiCommand)
    const name = flags.name || 'myComponent'
    await fs.writeFile(`${name}.js`, dmuiComponent(name))
  }
}

DmuiCommand.description = `Create a barebones Material-UI React dumb component`

DmuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DmuiCommand
