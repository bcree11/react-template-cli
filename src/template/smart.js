module.exports = function (name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const smart = `import React from 'react'
import './App.css'

export default class ${upperCaseName} extends React.Component {
  state = {
  }

  render() {
    const {} = this.state
    return (
      <div>
        <h1>${upperCaseName} Component</h1>
      </div>
    )
  }
}`
  return smart
}
