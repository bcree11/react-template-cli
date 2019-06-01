const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const muiComponent = require('../template/smartMaterialUi')
const mkdirp = require('mkdirp')
const path = require('path')
const appDir = process.cwd()
const chalk = require('chalk')

class MuiCommand extends Command {
  async run() {
    const {flags} = this.parse(MuiCommand)
    const name = flags.name || 'myComponent'
    const fileArr = name.split('/')
    const file = fileArr.pop()
    const dir = fileArr.join('/').concat('/')
    const fullPath = appDir+'/'+dir
    async function makeDir(){
      if(dir){
       await mkdirp(path.join(appDir, dir))
      }
    }
    makeDir()
    setTimeout(function (){
      if(file){
        fs.writeFile(`${fullPath+file}.js`, muiComponent(file))
        console.log(chalk.green(`Generated ${fullPath+file}.js`))
      } else {
        fs.writeFile(`${fullPath}myComponent.js`, muiComponent('myComponent'))
        console.log(chalk.green(`Generated ${fullPath}myComponent.js`))
      }
    }, 1000)
  }
}

MuiCommand.description = `Create a barebones Material-UI React component`

MuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name of file and component'}),
}

module.exports = MuiCommand
