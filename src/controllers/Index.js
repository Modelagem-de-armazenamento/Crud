const express = require("express")
const app = express()
const port = 5000

app.listen(port, () => {
    console.log("Gerenciador de armazenamento executado na porta: " + port)

})