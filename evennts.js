const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('Tankibhargyi hai', () => {
  console.log('Kripya motor bnd karein');
  setTimeout(() => {
    console.log('Motor band ho gayi hai');
  }, 2000);
});

console.log("motor bnd kr bhai");
myEmitter.emit('Tankibhargyi hai');
console.log("sun nhi rha");
    //these are used in making in real time applications and are very important in platforms like zoom and whatsapp