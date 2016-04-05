'use strict';

var React = require('react')
var SvgIcon = require('material-ui/lib/svg-icon').default

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

module.exports = function(props)
{
  return(
    React.createElement(SvgIcon, React.__spread({viewBox: "0 0 640 480"},  props), 
      React.createElement("g", {"fill-rule": "evenodd", strokeWidth: "1pt"}, 
        React.createElement("path", {fill: "#fff", d: "M0 0h640v480H0z"}), 
        React.createElement("path", {fill: "#00267f", d: "M0 0h213.337v480H0z"}), 
        React.createElement("path", {fill: "#f31830", d: "M426.662 0H640v480H426.662z"})
      )
    )
  )
}
