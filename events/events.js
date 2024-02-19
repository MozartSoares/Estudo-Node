const { EventEmitter } = require('events')
const { inherits } = require('util')
const ev = new EventEmitter()

//on ouve sempre
//once ouve apenas uma vez
ev.on('saySomething', (message) => {
  console.log('something was said', message)
})

ev.emit('saySomething', 'Mozart')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter) //herdou os prototypes de event emitter

const chapolin = new Character('chapolin')
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado !`))
console.log('Quem poderá me defender ????')
chapolin.emit('help')