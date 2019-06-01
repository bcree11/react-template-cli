module.exports = function (name){
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
  const dumbMaterial = `import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    color: 'blue'
  },
})

const ${upperCaseName} = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <h1>${upperCaseName} M-UI Component</h1>
    </div>
  )
}

${upperCaseName}.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(${upperCaseName})`
  return dumbMaterial
}
