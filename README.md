material-ui-country-flags
=========================

Library with country flag icons for Material-UI.

## Installation

```shell
  npm install material-ui-country-flags --save
```

## Usage - ES6

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

More detailed example [isomorphic-material-relay-starter-kit](https://github.com/codefoundries/isomorphic-material-relay-starter-kit/blob/master/webapp/components/AppBar_Language.jsx).


## Contributing

All existing icons are modified versions of icons from [flag-icon-css](https://github.com/lipis/flag-icon-css/tree/master/flags/4x3)

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
