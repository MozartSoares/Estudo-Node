const express = require('express');

const app = express();

//set é um método do express 
//ele espera que os arquivos estejam dentro de uma pasta views
app.set('view engine', 'ejs')

//criando uma rota para o url especificado (no caso /) e definindo o que será renderizado dos arquivos ejs
app.get('/', function (req, res) {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa Javascript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'rroz'
    },
    {
      title: 'I',
      message: 'nstale o EJS'
    },
    {
      title: 'S',
      message: 'intaxe é muito simples'
    }
  ]
  const subtitle = 'Vamos aprender sobre o EJS'
  res.render('pages/index', {
    benefits: items,
    subtitle: subtitle
  })
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

//listen é uma função nativa do express para ouvir uma port do localhost localhost:8080
app.listen(8080)
console.log('rodando')

function test() {
  console.log('teste')
}