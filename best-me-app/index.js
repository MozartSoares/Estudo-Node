const questions = [
  'o que aprendi hoje ?',
  'o que me deixou aborrecido ? \n,e o que poderia fazer para melhorar ?',
  'o que me deixou feliz hoje',
  'quantas pessoas ajudei hoje'
]

const ask = (i = 0) => {
  process.stdout.write('\n\n' + questions[i] + ' > ')
}

ask()
//on ouve eventos (event listener)

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.stdout.write(JSON.stringify(answers))
    process.exit()
  }
})
process.on('exit', () => {
  console.log(`
    Bacana Mozart !

    O que você aprendeu hoje foi: 
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi: 
    ${answers[1]}

    O que me deixou feliz hoje foi: 
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje !!

    Volte amanhã para novas reflexões !
  `)
})