# icon-toolkit #

Dynamic app icon generator for iOS, Android

[![NPM version](https://img.shields.io/npm/v/icon-toolkit.svg?style=flat)](https://www.npmjs.com/package/icon-toolkit)
[![Build Status](https://img.shields.io/travis/pavjacko/icon-toolkit.svg?style=flat)](https://travis-ci.org/pavjacko/icon-toolkit)
[![Coverage Status](https://img.shields.io/coveralls/pavjacko/icon-toolkit.svg?style=flat)](https://coveralls.io/r/pavjacko/icon-toolkit)
[![Code Climate](https://img.shields.io/codeclimate/github/pavjacko/icon-toolkit.svg?style=flat)](https://codeclimate.com/github/pavjacko/icon-toolkit)
[![Dependency Status](https://img.shields.io/david/pavjacko/icon-toolkit.svg?style=flat)](https://david-dm.org/pavjacko/icon-toolkit)
[![devDependency Status](https://img.shields.io/david/dev/pavjacko/icon-toolkit.svg?style=flat)](https://david-dm.org/pavjacko/icon-toolkit#info=devDependencies)

## Installation

`npm install --save icon-toolkit`

## Usage

IconToolkit API is Promise based

#### Usage 1 (Basic):

```js
import IconToolkit from 'icon-toolkit'

IconToolkit.generateIcons({
  source: '/Users/userX/sourceImage.png'),
  destinationFolder: '/Users/userX/exportIcons')
}).then(() => console.log('SUCCESS!'))

```

#### Usage 2 (iOS / Android split):

```js
import IconToolkit from 'icon-toolkit'

IconToolkit.generateIcons({
  source: '/Users/userX/sourceImage.png'),
  ios: {
    destinationFolder: '/Users/userX/myIosIcons')
  },
  android: {
    destinationFolder: '/Users/userX/myAndroidIcons')
  }
}).then(() => console.log('SUCCESS!'))

```

#### Usage 3 (Advanced):

```js
import IconToolkit from 'icon-toolkit'

IconToolkit.generateIcons({
  ios: {
    source: '/Users/userX/iOSImage.png'),
    destinationFolder: '/Users/userX/myIosIcons')
  },
  android: {
    source: '/Users/userX/androidImage.png'),
    destinationFolder: '/Users/userX/myAndroidIcons')
  }
}).then(() => console.log('SUCCESS!'))

```

#### Output

| iOS        | Android           |
| :-------------: |:-------------:|
| ![iOS](docs/ios.png) | ![Android](docs/android.png) |

## Contributing ##

Basicaly clone, change, test, push and pull request.

## License ##

icon-toolkit is licensed under the MIT license.
