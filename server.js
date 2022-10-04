
const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));

})
app.get("/favcolor", (req, res) => {
    res.sendFile(path.join(__dirname + '/favcolor.html'));
})

app.get("/favfood", (req, res) => {
    res.sendFile(path.join(__dirname + '/favfood.html'));
})

app.get("/favsub", (req, res) => {
    res.sendFile(path.join(__dirname + '/favsub.html'));
})

app.listen(3000, () => {
    console.log('Server Starting up at: port:3000:');
}
)


