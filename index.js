const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const { Pool, Client } = require('pg')


app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})
)
app.use(express.json())

const pool = new Pool({
    user: 'vqfdkbtimgfhmq',
    host: 'ec2-3-248-103-75.eu-west-1.compute.amazonaws.com',
    database: 'db9elntje5gube',
    password: 'd657eb752a6a2ec28ad993df5cc98f494d9fac260a95be96d18c14437b982e58',
    port: '5432'

})

app.post("/create", (req, res) => {

    // const artist = req.body.artist
    // const title = req.body.title
    // const audio = req.body.audio
    
    pool.query("CREATE TABLE tracks (id int NOT NULL AUTO_INCREMENT, date datetime, artist varchar 255, title varchar 255, audio varchar 255)", 
    [artist,title,audio], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
})

// connection.connect(function(err) {
//     if (err) throw err
//     console.log('Connected')
//     let sql = "SELECT * FROM tracks"
//     connection.query(sql, function (err, result) {
//         if (err) throw err
//         app.get('/', (req, res) => {
//             res.send(result)
//           })
//         console.log(result)
//     })
//     connection.end()
//     console.log("Disconnected")
// })
  