// // PROMISES (BEST WAY)

import { promises as fs } from "fs";

(async() => {
    try {
        await fs.writeFile("teste.txt", "bla bla bla", "utf-8")
        await fs.appendFile("teste.txt", "\naksodfkosdfksofkoasd appended!", "utf-8")
        const data = await fs.readFile("teste.txt", "utf-8")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
})()



// // PROMISES (PROMISES HELL)
//
// import { promises as fs } from "fs";
//
// fs.writeFile("teste.txt", "bla bla bla", "utf-8")
//     .then(() => {
//         fs.appendFile("teste.txt", "\naksodfkosdfksofkoasd appended!", "utf-8")
//             .then(() => {
//                 fs.readFile("teste.txt", "utf-8")
//                     .then(data => console.log(data))
//                     .catch(err => console.log(err));
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));



// // ASYNC
// 
// import fs from "fs"
//
// console.log("1")
// fs.writeFile('teste.txt', "Blablabla", err => {
//     console.log("2")
//     if (err) console.log(err)
//     else {
//         fs.appendFile('teste.txt', " Teste YAYAYAYAYAYYAYA", err => err ? console.log(err) : null)
//         fs.readFile('teste.txt', "UTF-8", (err, data) => {
//             if (err) console.log(err)
//             else console.log(data)
//         })
//     }
// })
// console.log("3")



// // SYNC (NÃO RECOMENDADO EM APIs)
// 
// import fs from "fs"
//
// try {
//     console.log("1")
//     fs.writeFileSync("teste.txt", "Blablablaaaa")
//     console.log("2")
//     const data = fs.readFileSync("teste.txt", "utf-8")
//     console.log(data);
//     console.log("3")
// } catch (err) {
//     console.log(err)
// }