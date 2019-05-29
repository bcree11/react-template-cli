const {Command, flags} = require('@oclif/command')

class MuiCommand extends Command {
  async run() {
    const {flags} = this.parse(MuiCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/bcree/Desktop/react-template-cli/src/commands/generate/mui.js`)
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
