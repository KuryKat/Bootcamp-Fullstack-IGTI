import express from 'express'

const app = express()
app.use(express.json())
/*
 *
 * Método "use()" (Express)
 *
 */
// Com este método padrão do EXPRESS você consegue definir funções
// que serão executadas sempre que uma requisição (request)
// for enviado ao servidor, dessa maneira podendo fazer determinadas
// "Brincadeirinhas" ou outras coisas antes de chegar no escopo da callback
// da URI desejada.
//
// **WARN**: ele vai SEMPRE executar, INDEPENDENDO do método ou da URI explícita
app.use((req, res, next) => {
    console.log('YAY, SOME REQUEST WAS SENDED TO ME, I LOVE THAT!! YAYY!!!')
    next() // é necessário explicitar o next para que ele passe para o próximo callback (no caso, o callback da URI)
})

/*
 *
 * Métodos HTTP (Express)
 *
 */

// GET
// "Pega" algo, se a URI informada for atingida com o método GET, executa seu callback
//  vvv
app.get('/test', (_, res) => res.send('GETTED!'))

// POST
// "Posta" algo, se a URI informada for atingida com o método POST, executa seu callback
//  vvv
app.post('/test', (_, res) => res.send('POSTED!'))

// PUT
// "Atualiza" Algo, se a URI informada for atingida com o método PUT, executa seu callback
//  vvv
app.put('/test', (_, res) => res.send('PUTTED!'))

// DELETE
// "Deleta" Algo, se a URI informada for atingida com o método DELETE, executa seu callback
//  vvv
app.delete('/test', (_, res) => res.send('DELETED!'))

// ALL
// Recebe todas os métodos HTTP, qualquer método que chegar nesta URI ele executa seu callback
//  vvv
app.all('/all', (_, res) => res.send('I LOVE ALL METHODS!'))

/*
 *
 * Rota única
 *
 */
// Você pode definir uma rota utilizado o método 'route()' e definir
// a callback de cada método para previnir repetição de código,
// deixado o código mais claro e legível, e sem precisar usar o 'all()',
// passando apenas os métodos e os callbacks que quero executar
app.route('/routeYAY')
    .get((_, res) => res.send('Getted!'))
    .post((_, res) => res.send('Posted!'))
    .put((_, res) => res.send('Putted!'))
    .delete((_, res) => res.send('Deleted!'))

/*
 *
 * Símbolos nas Rotas
 *
 */

// Interrogação (?)
// Deixa o caractere anterior como opcional, exemplo:
// app.get('/blue?') =
// http://localhost:3000/blue = responde
// http://localhost:3000/blu = responde
app.get('/blue?', (_, res) => res.send('Heyo!'))

// Mais (+)
// Permite repetição do caractere anterior infinitamente, exemplo:
// app.get('/buzz+') =
// http://localhost:3000/buzzhttp://localhost:3000/buzz = responde
// http://localhost:3000/buzzz = responde
// http://localhost:3000/buzzzz... = responde
app.get('/buzz+', (_, res) => res.send('Heya!'))

// Asterísco (*)
// Permite QUALQUER coisa, exemplo:
// app.get('/one*Blue') =
// http://localhost:3000/oneHEYAblue = responde
// http://localhost:3000/oneKDFISJOASDKOASDKSblue = responde
// http://localhost:3000/oneCarblue = responde
// http://localhost:3000/oneQUALQUERCOISAblue = responde
app.get('/one*Blue', (_, res) => res.send('/one*blue'))

// Parênteses = ()
// Faz com que uma expressão seja reconhecida como uma unidade, exemplo:
// app.get('/test(ing)?') =
// http://localhost:3000/test = responde
// http://localhost:3000/testing = responde
// (juntando os parênteses com a interrogação faz com que a UNIDADE gerada pelos parênteses seja Opcional)
app.get('/testt(ing)?', (_, res) => res.send('YAY, TESTING!'))

/*
 *
 * RegEX nas rotas
 *
 */
// Você pode utilizar expressão regular (RegEX) para definir rotas mais específicas,
// limitando caracteres, entre outros, usando e abusando das expressões regulares
app.get(/.*Red$/, (_, res) => res.send('REGULAR EXPRESSION, YAY!'))
// Nesta rota acima ele vai verificar se a URI contém "qualquer coisa" (*) antes de "Red",
// Finalizando a URI em "Red", caso seja verdadeiro, executa o seu callback
//
// Ler mais sobre RegEX:
// Mozilla Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// Artigo: https://medium.com/@alexandreservian/regex-um-guia-pratico-para-expressões-regulares-1ac5fa4dd39f
// Testador Online de RegEX: https://regexr.com

/*
 *
 * MultipleHandle
 *
 */
// Para economizar tempo e espaço de código você pode passar múltiplos
// callbacks para uma mesma rota em um mesmo método, basta utilizar o
// terceiro parâmetro do callback do método, chamado "Next", o next
// é uma função que quando executada passa para o próximo escopo de Handler
app.get(
    '/testHandlers',
    (req, res, next) => {
        console.log('First Handle!')
        next()
    },
    (req, res, next) => {
        console.log('Second Handle!')
        next()
        },
    (req, res, next) => {
        console.log('Third Handle!')
        next()
        },
    (req, res) => {
        console.log('Last Handle!')
        res.end()
    }
)

// Você também pode definir os Handlers por um array, ele vai executar os handlers na ordem que foram inseridos no Array
const handle1 = (req, res, next) => {
    console.log('First Handle!')
    next()
}
const handle2 = (req, res, next) => {
    console.log('Second Handle!')
    next()
}
const handle3 = (req, res, next) => {
    console.log('Third Handle!')
    next()
}
const handle4 = (req, res, next) => {
    console.log('Last Handle!')
    res.end()
}

app.get('/testArrayHandlers', [handle1, handle2, handle3, handle4])

// Iniciando o servidor na porta 3000
app.listen(3000, console.log('Started!'))
