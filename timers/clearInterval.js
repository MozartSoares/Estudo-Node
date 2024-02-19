//clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const finished = () => { console.log('finished') }

let timer = setInterval(finished, timeOut)

setTimeout(() => clearInterval(timer), 5000) // cancelou o setInterval após rodar por 5 segundos, imprime finished 4 vezes
