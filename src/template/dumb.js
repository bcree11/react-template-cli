module.exports = function nameComponent(name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const dumb = `import React from 'react'\r\nimport './App.css'\r\n\nconst ${upperCaseName} = (props) => {\r\n\tconst {} = props\r\n\treturn (\r\n\t\t<div>\r\n\t\t\t<h1>${upperCaseName} Component</h1>\r\n\t\t</div>\r\n\t)\r\n}`
  return dumb
}
