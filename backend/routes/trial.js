// import express from 'express'
// import trial from '../models/trial'


// const trialRouter = express.Router()

// trialRouter.post('/', (req, res) => {
//     const {Date, USD, INR, GBP} = req.body
//     const newTrial = new trial({
//         date: Date,
//         USD: USD,
//         INR: INR,
//         GBP: GBP
//     })
//     newTrial.save()

//     return res.json({newTrial})
// })

// trialRouter.post('/getYearlyData', async (req, res) => {
//     const {firstCurrency, secondCurrency} = req.body
//     const list = [firstCurrency, secondCurrency]
//     let allDocuments

//     try {
//         allDocuments = await trial.find()
        
//     } catch (error) {
//         return res.json({success: false}) 
//     }

//     const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.date.substring(3,5) === '01' && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
//     console.log(newDocument1)
//     const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
//     console.log(value1)


//     const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.date.substring(3,5) === '12')[0]
//     const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])
//     console.log(value2)
//     const newArray = []
//     newArray.push(value1)
//     newArray.push(value2)

//     return res.json({success: true, newArray})
// })

// export default trialRouter