import { EventEmitter } from 'events';

const emmiter = new EventEmitter();

emmiter.addListener("Hello", (name) => {
    console.info(`hello ${name}`)
})

emmiter.addListener("hello", (name) => {
    console.info(`Halo ${name}`)
})

emmiter.emit("Hello", 'Agil')

/*

di event ini jika saya membuat event Hello dan callback nya maka untuk mentrigger event nya cukup memanggil nama event dan mengisi parameter nya 
emmiter.emit("Hello", 'Agil')

dapat juga mentrigger keduanya 

*/