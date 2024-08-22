const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your client's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(express.json())

app.use(cors(corsOptions));
const userRoute = require("./routes/userRoute")
const chatRoute = require("./routes/chatRoute")
const messageRoute = require("./routes/messageRoute")
app.use("/api/users", userRoute)
app.use("/api/chats", chatRoute)
app.use("/api/messages", messageRoute
)
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('Connected to MongoDB')
}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error)
})

app.get('/', (req, res) => {
    res.send('Welcome to AI ChatBox API')
})

app.listen(PORT, ((req, res)=>{
    console.log(`listening on ${PORT}`)
}))
