//clearTimeout cancelar um timeout

const timeOut = 3000
const finished = () => { console.log('finished') }

let timer = setTimeout(finished, timeOut)
clearTimeout(timer) // cancelou o timeout