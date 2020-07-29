const express = require('express');
const { execPath } = require('process');
const app = express()
const port = 8000
const cors = require('cors')
const execSync = require('child_process').execSync;
const awk = "awk -v OFS=, '{print $1,$2,$3,$4,$5,$6,$7,$8,$9}'"
const ssh = "ssh"
const path = "ls -l /mnt/c/Users/Alex/Desktop"
const location = "localhost"
var router = express.Router()

app.use(cors()); // Enable All CORS Requests

var foo = () => {
    return execSync(`${ssh} ${location} ${path} | ${awk}`, { encoding: 'utf-8' });
}

app.get('/api/ls', (req, res) => {
    res.json(foo())
})

app.listen(port, () => console.log(`listening on port ${port}`))