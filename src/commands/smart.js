const {Command, flags} = require('@oclif/command')
const fs = require('fs').promises
const smartComponent = require('../template/smart')
const mkdirp = require('mkdirp')
const path = require('path')
const appDir = process.cwd()

class SmartCommand extends Command {
  async run() {
    const {flags} = this.parse(SmartCommand)
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
        fs.writeFile(`${fullPath+file}.js`, smartComponent(file))
      } else {
        fs.writeFile(`${fullPath}myComponent.js`, smartComponent('myComponent'))
      }
    }, 1000)
  }
}

SmartCommand.description = `Create a basic React smart component`

SmartCommand.flags = {
  name: flags.string({char: 'n', description: 'name of file and component'}),
}

module.exports = SmartCommand
