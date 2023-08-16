const path = require('path') //built-in module 'path'

console.log(path.sep); // get platform specific separator

const filePath = path.join('\\content','subfolder','test.txt') //join using the separator
console.log(filePath);

const base = path.basename(filePath) // get the basename - the last item on the path
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt') // get absolute path
console.log(absolute);