//setInterval irá rodar uma função N vezes depois de X milissegundos

const timeout = 1000
const checking = () => console.log('checking')

setInterval(checking, timeout)