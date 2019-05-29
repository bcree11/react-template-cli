module.exports = function nameComponent(name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const smart = `import React from 'react'\r\nimport './App.css'\r\n\nexport default class ${upperCaseName} extends React.Component {\r\n\tstate = {\r\n\t}\r\n\n\trender() {\r\n\t\tconst {} = this.state\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<h1>${upperCaseName} Component</h1>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}`
  return smart
}
