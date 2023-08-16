// when performing tasks asynchronously, we start one task, offload the task, then start the next task right away

const {readFile, writeFile} = require('fs') // destructuring readFileSync and writeFileSync from fs
// would be the same as
// const fs = require('fs)
// fs.readFile...

console.log('start');
readFile('.\\content\\first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result

    readFile('.\\content\\second.txt','utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile(
            '.\\content\\result-async.txt',
            `Here is the result: ${first}, ${second}`, (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task');
            })
    })

    
}) // reads file, then the callback function executes its instructions

console.log('starting next task');