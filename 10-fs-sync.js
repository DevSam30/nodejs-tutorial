const {readFileSync, writeFileSync} = require('fs') // destructuring readFileSync and writeFileSync from fs
// would be the same as
// const fs = require('fs)
// fs.readFileSync...

const first = readFileSync('.\\content\\first.txt', 'utf8')
const second = readFileSync('.\\content\\second.txt', 'utf8')

console.log(first, second);

writeFileSync('.\\content\\result-sync.txt', 'hello world') // use {flag: 'a'} to append values to existing file, by default node will overwrite
