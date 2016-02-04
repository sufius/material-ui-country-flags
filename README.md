material-ui-country-flags
=========================

Library with country flag icons for [Material-UI](http://www.material-ui.com/#/). Initially created for use in [Isomorphic Material Relay Starter Kit (IMRSK)](https://github.com/codefoundries/isomorphic-material-relay-starter-kit) by [Code Foundries](http://codefoundries.com/). The boilerplate for the npm package is from [insin/templates/react-module/](https://github.com/insin/templates/tree/master/react-module).

## Installation

```shell
  npm install material-ui-country-flags --save
```

## Usage

```javascript
import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';

class MyComponent extends React.Component
{
  render( )
  {
    return(
      <div>
        <IconButton><Icon_Flag_BG /></IconButton>
        <IconButton><Icon_Flag_US /></IconButton>
      </div>
    );
  }
}

```

For list of icons refer to [the src folder](src/).

More detailed example [isomorphic-material-relay-starter-kit](https://github.com/codefoundries/isomorphic-material-relay-starter-kit/blob/master/webapp/components/AppBar_Language.jsx).


## Contributing

All existing icons are modified versions of icons from [lipis/flag-icon-css](https://github.com/lipis/flag-icon-css/tree/master/flags/4x3). An eventual goal of the project would be to have all of those SVG files converted to Material-UI icons.

In lieu of a formal styleguide, take care to maintain the existing coding style.
Check out [existing issues and help wanted](https://github.com/codefoundries/material-ui-country-flags/issues).


## Release History

[Releases on Github project](https://github.com/codefoundries/material-ui-country-flags/releases/).
