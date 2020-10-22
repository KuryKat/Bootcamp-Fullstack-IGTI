import { promises as fs } from 'fs'

;(async () => {
    try {
        const KuryKat = { gender: 'GenderFluid', age: 16, beauty: true }
        const Arrayzinho = ['OLá', 'KDOSDKSAO', 'KDOASKDAOSDS', 'UAYYAYDUS']

        // Escrevendo arquivo JSON
        await fs.writeFile(
            'teste.json',
            JSON.stringify({
                users: {
                    KuryKat,
                },
                Arrayzinho,
            }),
            'utf-8'
        )

        // Lendo arquivo JSON e salvando em um Objeto (somente durante a execução)
        const data = JSON.parse(await fs.readFile('teste.json'))
        // console.log(data)
        // console.log(data.users)

        const Katarina = { gender: 'Female', age: null, beauty: true }

        // Implantando no Objeto um novo valor (somente durante a execução)
        data.users.Katarina = Katarina

        // Sobrescrevendo os valores no arquivo
        await fs.writeFile('teste.json', JSON.stringify(data))
    } catch (err) {
        console.log(err)
    }
})()
