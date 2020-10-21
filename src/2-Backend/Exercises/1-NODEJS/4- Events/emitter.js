import ev from './index.js'


ev.on("testeyayaya", () => {
    console.log("Ouviu também");
})

ev.emit("testeyayaya", "abcdlsapdlasps")