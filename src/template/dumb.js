module.exports = function (name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const dumb = `import React from 'react'

const ${upperCaseName} = (props) => {
  const {} = props
  return (
    <div>
      <h1>${upperCaseName} Component</h1>
    </div>
  )
}

export default ${upperCaseName}`
  return dumb
}
