const data = require("./data/polist.js")
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/prodmh/getpolist", (req, res) => {
		console.log(data)
		res.json(data.polist)
})
	


app.listen(port, () => console.log(`Example app listening on port ${port}!`))