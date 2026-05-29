const express = require('express')
const app = express()
const port = 3000

posts = [
    {
        title: "Ciambellone",
        description: "Ricetta del ciambellone",
        image: "/images/ciambellone.jpeg",
        tags: [ "pan di spagna", "lievitato", "vaniglia", "dolce da forno" ]
    },
    {
        title: "Cracker alla barbabietola",
        description: "Ricetta dei cracker alla barbabietola",
        image: "/images/cracker_barbabietola.jpeg",
        tags: [ "cracker", "barbabietola", "salato", "aperitivo" ]
    },
    {
        title: "Pane fritto dolce",
        description: "Ricetta del pane fritto dolce",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: [ "pane", "fritto", "cannella", "dolce" ]
    },
    {
        title: "Pasta alla barbabietola",
        description: "Ricetta della pasta alla barbabietola",
        image: "/images/pasta_barbabietola.jpeg",
        tags: [ "pasta", "barbabietola", "salato", "primo" ]
    },
    {   
        title: "Torta paesana",
        description: "Ricetta della torta paesana",
        image: "/images/torta_paesana.jpeg",
        tags: [ "torta", "cioccolato", "arancia", "dolce" ]
    }
]

app.listen(port, () => {
    console.log(`server running and listening on port:${port}`);
})


// risposta base del server
app.get("/", (req,res) => {
    res.send("Server del mio blog")
})

// dichiaro la cartella con i file pubblici
app.use(express.static('public'));

// rotta per l'invio dell'intero array
app.get("/bacheca", (req,res) => {
    res.json(posts)
})

// rotta per l'invio dell'immagine richiesta
app.get("/bacheca/image/:id", (req,res) => {
    res.send(`<img src=${posts[req.params.id].image} />`)
})

