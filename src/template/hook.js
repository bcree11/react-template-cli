module.exports = function (name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const hook = `import React, { useState } from 'react'

function ${upperCaseName}() {
  const [] = useState()

  return (
    <div>
      <h1>${upperCaseName} Component</h1>
    </div>
  )
}

export default ${upperCaseName}`
  return hook
}
