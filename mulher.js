const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Thricya Silva",
        imagem: "https://media.licdn.com/dms/image/D4D03AQEQR2qWq3KyJg/profile-displayphoto-shrink_200_200/0/1669776478342?e=1692230400&v=beta&t=_U8pXbypQc75an7DvipkFhjfI5UA4mFjJeTGuzMwZyk",
        minibio: "Desenvolvedora"
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)