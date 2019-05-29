const {Command, flags} = require('@oclif/command')

class DumbCommand extends Command {
  async run() {
    const {flags} = this.parse(DumbCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/bcree/Desktop/react-template-cli/src/commands/generate/dumb.js`)
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
