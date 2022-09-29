import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import year2022Router from './routes/2022.js'
import year2021Router from './routes/2021.js'
import year2020Router from './routes/2020.js'
import year2019Router from './routes/2019.js'
import year2018Router from './routes/2018.js'
import year2017Router from './routes/2017.js'
import year2016Router from './routes/2016.js'
import year2015Router from './routes/2015.js'
import year2014Router from './routes/2014.js'
import year2013Router from './routes/2013.js'
import year2012Router from './routes/2012.js'
// import trialRouter from './routes/trial.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// routes
// app.use('/api/trial', trialRouter) 
app.use('/api/2022', year2022Router) 
app.use('/api/2021', year2021Router) 
app.use('/api/2020', year2020Router) 
app.use('/api/2019', year2019Router) 
app.use('/api/2018', year2018Router) 
app.use('/api/2017', year2017Router) 
app.use('/api/2016', year2016Router) 
app.use('/api/2015', year2015Router) 
app.use('/api/2014', year2014Router) 
app.use('/api/2013', year2013Router) 
app.use('/api/2012', year2012Router) 

app.get('/', (req, res) => {
  res.send("Hello world")
  res.end()
})

  
const port = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected to database and listening to localhost ${port}`)
  )
  .catch((err) => console.log(err))
