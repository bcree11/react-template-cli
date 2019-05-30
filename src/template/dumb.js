module.exports = function nameComponent(name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const dumb = `import React from 'react'
import './App.css'

const ${upperCaseName} = (props) => {
  const {} = props
  return (
    <div>
      <h1>${upperCaseName} Component</h1>
    </div>
  )
}`
  return dumb
}
