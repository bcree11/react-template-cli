module.exports = function nameComponent(name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const smartMaterial = `import React from 'react'\r\nimport PropTypes from 'prop-types'\r\nimport { withStyles } from '@material-ui/core/styles'\r\n\nconst styles = theme => ({\r\n\troot: {color: 'blue'},\r\n})\r\n\nclass ${upperCaseName} extends React.Component {\r\n\tstate = {\r\n\t}\r\n\n\trender() {\r\n\t\tconst {} = this.state\r\n\t\treturn (\r\n\t\t\t<div className={classes.root}>\r\n\t\t\t\t<h1>${upperCaseName} M-UI Component</h1>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\n${upperCaseName}.propTypes = {\r\n\tclasses: PropTypes.object.isRequired,\r\n}\r\n\nexport default withStyles(styles)(${upperCaseName})`
  return smartMaterial
}
