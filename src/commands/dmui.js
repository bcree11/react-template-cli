const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const dmuiComponent = require('../template/dumbMaterialUi')
const mkdirp = require('mkdirp')
const path = require('path')
const appDir = process.cwd()
const chalk = require('chalk')

class DmuiCommand extends Command {
  async run() {
    const {flags} = this.parse(DmuiCommand)
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
        fs.writeFile(`${fullPath+file}.js`, dmuiComponent(file))
        console.log(chalk.green(`Generated ${fullPath+file}.js`))
      } else {
        fs.writeFile(`${fullPath}myComponent.js`, dmuiComponent('myComponent'))
        console.log(chalk.green(`Generated ${fullPath}myComponent.js`))
      }
    }, 1000)
  }
}

DmuiCommand.description = `Create a barebones Material-UI React dumb component`

DmuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DmuiCommand
