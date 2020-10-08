import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Qual seu nome?\n", name => {
    console.log(`Olá ${name}\n`);
    question()
})

function question() {
    rl.question("Digite o número para achar seus múltiplos de 5:\n(Para sair digite 'exit')\n", number => {
        if (number === "exit") {
            console.log(`Okay! Bye then~`)
            rl.close()
        } else {
            let multiplos = []
            for (let i = 5; i < parseInt(number); i++) {
                if (i % 5 === 0) multiplos.push(i)
            }
            console.log(`Aqui estão seus múltiplos:`)
            console.log(multiplos)
            question()
        }
    })
}