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
        React.createElement("path", {fill: "#ffe600", d: "M0 320h640v160.002H0z"}), 
        React.createElement("path", {d: "M0 0h640v160H0z"}), 
        React.createElement("path", {fill: "red", d: "M0 160h640v160H0z"})
      )
    )
  )
}
