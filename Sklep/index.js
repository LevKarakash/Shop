const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('css'))
app.use(express.static('js'))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cart', (req, res) => {
    res.render('cart');
})

app.get('/favorite', (req, res) => {
    res.render('favorite');
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Serwer został uruchomiony: http://localhost:${PORT}`)
})

