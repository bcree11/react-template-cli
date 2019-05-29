module.exports = function nameComponent(name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const dumbMaterial = `import React from 'react'\r\nimport PropTypes from 'prop-types'\r\nimport { withStyles } from '@material-ui/core/styles'\r\n\nconst styles = theme => ({\r\n\troot: {color: 'blue'},\r\n})\r\n\nconst ${upperCaseName} = (props) => {\r\n\tconst { classes } = props\r\n\treturn (\r\n\t\t<div className={classes.root}>\r\n\t\t\t<h1>${upperCaseName} M-UI Component</h1>\r\n\t\t</div>\r\n\t)\r\n}\r\n\\${upperCaseName}.propTypes = {\r\n\tclasses: PropTypes.object.isRequired,\r\n}\r\n\nexport default withStyles(styles)(${upperCaseName})`
  return dumbMaterial
}
