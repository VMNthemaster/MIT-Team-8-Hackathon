import express from 'express'
import year2013 from '../models/2013.js'

const year2013Router = express.Router()

year2013Router.post('/yearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body
    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2013.find({})
        console.log(allDocuments)
    } catch (error) {
        return res.json({success: false}) 
    }

    const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jan') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    console.log("doc1",newDocument1)
    const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
    console.log(value1)
    if(!newDocument1){
        return res.json({success: false}) 

    }

    const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Dec'))[0]
    console.log("doc2", newDocument2)
    if(!newDocument2){
        return res.json({success: false}) 

    }
    const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])
    console.log(value2)
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)

    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Dec'})
})

export default year2013Router 