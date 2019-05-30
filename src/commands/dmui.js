const {Command, flags} = require('@oclif/command')

class DmuiCommand extends Command {
  async run() {
    const {flags} = this.parse(DmuiCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/bcree/Desktop/react-template-cli/src/commands/dmui.js`)
  }
}

DmuiCommand.description = `Describe the command here
...
Extra documentation goes here
`

DmuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DmuiCommand
