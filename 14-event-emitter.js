const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// the order matters - we first listen for an event 'on()', then emit the event 'emit()'
customEmitter.on('response', (name, id)=>{ // listens for an event once it is emitted
    console.log(`data received user ${name} with id: ${id}`);
} )

customEmitter.on('response', ()=>{ // listens for an event once it is emitted
    console.log(`some other logic here`);
} )

customEmitter.emit('response', 'john', 34) // emits an event