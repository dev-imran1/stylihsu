const express = require('express')
// const mongoose = require('mongoose')
// const Abc = require('./model/createModel')

const app = express()
const routes = require('./routes')


app.use(routes)

// app.use(express.json())

// mongoose.connect('mongodb+srv://ecom:wZnnJeZmMwXndaNi@cluster0.iyecvsd.mongodb.net/test?appName=Cluster0')
//   .then(() => console.log('Connected!'))

// app.post('/create', async (req, res) => {
//   try {
//     const { name, email } = req.body

//     if (!name || !email) {
//       return res.status(400).send('Please type your name and email')
//     }

//     const data = new Abc({ name, email })
//     await data.save()

//     console.log(name)
//     return res.status(201).json(data)

//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// })

// app.get('/all',async (req,res)=>{
//   // let data =await Abc.find({name:"mohammad"}).select("name")
//   let data =await Abc.find({})
//   console.log(data)
//   res.send(data)
// })
app.listen(8000, () => {
  console.log('Example app listening on port 8000')
})
