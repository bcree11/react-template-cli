module.exports = {
  routing: `import React from 'react'\r\nimport {\r\n\tBrowserRouter,\r\n\tRoute,\r\n\tSwitch\r\n} from 'react-router-dom'\r\n\nexport default props => (\r\n\t<BrowserRouter>\r\n\t\t<Switch>\r\n\t\t\t<Route exact path='/some-route' component={SomeComponent}/>\r\n\t\t\t<Route path='/' component={Home}/>\r\n\t\t</Switch>\r\n\t</BrowserRouter>\r\n)`
}
