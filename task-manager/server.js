// import libraries
const express = require('express')
const connectDB = require('./db/connect')
const logger = require('./middleware/logger')
const notFound = require('./middleware/notfound')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
const app = express()

// routes
const taskRouter = require('./routes/task')

// middleware
app.use(logger)
app.use(express.static('./public'))
app.use(express.json())

// routing
app.use('/api/tasks', taskRouter)
app.use(notFound)
app.use(errorHandler)


const start = async () => {
    try {
        const { db, connection } = await connectDB(process.env.MONGO_URI)
        if (db) app.listen(process.env.PORT, console.log(`Server is listening in port ${process.env.PORT} in database: ${connection}`))
    } catch (error) {
        console.log(error.message)
    }
}
start()