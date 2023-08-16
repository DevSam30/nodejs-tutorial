// npm - global command, comes with node
// npm --version - to check version

// local dependency - use it only in this particular project
// npm i <package-name>

// global dependency - use it in any project
// npm install -g <package-name>

// package.json - a manifest file that stores important info about the project/package
// npm init command is used to create the package.json file

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);