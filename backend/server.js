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
const machineList = ["mycomputer1", "mycomputer2"]
var router = express.Router()
const statusDict = {
    "hostname": "mycomputer",
    "running": "true",
    "Cksum": 0x5678910,
    "pid": 13,
    "pDRCALeader": "true",
    "pDRCAIteration": 300,
    "MDRLevel": ["area 0.0.0.0 interface cvn68m2_01_26 MDR", "area 0.0.0.0 interface cvn68m2_01_27 MDR", "area 0.0.0.0 interface cvn68m2_01_26 MDR"],
    "NeighborState": ["4.4.4.4 1 00:00:37 Full/DROther 7d13:53:33 cvn68m2_01_26[PointToPoint]", "4.4.4.4 1 00:00:37 Full/DROther 7d13:53:33 cvn68m1_01_25[PointToPoint]"]
    }
const dictList = {
    data: [
        {
            "hostname": "mycomputer1",
            "running": "true",
            "Cksum": 0x5678910,
            "pid": 13,
            "pDRCALeader": "true",
            "pDRCAIteration": 300,
            "MDRLevel": ["area 0.0.0.0 interface cvn68m2_01_26 MDR", "area 0.0.0.0 interface cvn68m2_01_27 MDR", "area 0.0.0.0 interface cvn68m2_01_26 MDR"],
            "NeighborState": ["4.4.4.4 1 00:00:37 Full/DROther 7d13:53:33 cvn68m2_01_26[PointToPoint]", "4.4.4.4 1 00:00:37 Full/DROther 7d13:53:33 cvn68m1_01_25[PointToPoint]"]
        },
        {
            "hostname": "mycomputer2",
            "running": "false",
            "Cksum": 0x56735610,
            "pid": 13,
            "pDRCALeader": "false",
            "pDRCAIteration": 212,
            "MDRLevel": ["area 0.0.0.0 interface cvn68m2_01_26 MDR", "area 0.0.0.0 interface cvn68m2_01_27 MDR", "area 0.0.0.0 interface cvn68m2_01_26 MDR"],
            "NeighborState": ["4.4.4.4 1 00:00:37 Full/DROther 7d13:53:33 cvn68m2_01_26[PointToPoint]", "4.4.4.4 1 00:00:37 Full/DROther 7d13:53:33 cvn68m1_01_25[PointToPoint]"]
        }
    ]
}

app.use(cors()); // Enable All CORS Requests

var foo = () => {
    return execSync(`${ssh} ${location} ${path} | ${awk}`, { encoding: 'utf-8' });
}

app.get('/api/test/all_names', (req, res) => {
    res.json(machineList)
})

app.get('/api/test', (req, res) => {
    console.log('Connecting to api')
    res.json(dictList)
})

app.listen(port, () => console.log(`listening on port ${port}`))