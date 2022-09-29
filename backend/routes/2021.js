import express from 'express'
import year2021 from '../models/2021.js'

const year2021Router = express.Router()

year2021Router.post('/yearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body
    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2021.find({})
    } catch (error) {
        return res.json({success: false}) 
    }

    const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jan') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 

    }

    const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Dec'))[0]
    if(!newDocument2){
        return res.json({success: false}) 

    }
    const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)

    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Dec'})
})

year2021Router.post('/halfYearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2021.find({})
    } catch (error) {
        return res.json({success: false}) 
    }

    const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jan') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 

    }
    const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jun'))[0]
    if(!newDocument2){
        return res.json({success: false}) 

    }
    const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])

    const newDocument3 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Dec'))[0]
    if(!newDocument3){
        return res.json({success: false}) 

    }
    const value3 = Number(newDocument3[`${list[1]}`])/Number(newDocument3[`${list[0]}`])
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)
    newArray.push(value3)

    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Aug'})
})

year2021Router.post('/quarterYearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2021.find({})
    } catch (error) {
        return res.json({success: false}) 
    }

    const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jan') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 

    }
    const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Apr'))[0]
    if(!newDocument2){
        return res.json({success: false}) 

    }
    const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])

    const newDocument3 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jul'))[0]
    if(!newDocument3){
        return res.json({success: false}) 

    }
    const value3 = Number(newDocument3[`${list[1]}`])/Number(newDocument3[`${list[0]}`])

    const newDocument4 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Oct'))[0]
    if(!newDocument4){
        return res.json({success: false}) 

    }
    const value4 = Number(newDocument4[`${list[1]}`])/Number(newDocument4[`${list[0]}`])

    const newDocument5 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Dec'))[0]
    if(!newDocument5){
        return res.json({success: false}) 

    }
    const value5 = Number(newDocument5[`${list[1]}`])/Number(newDocument5[`${list[0]}`])


    
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)
    newArray.push(value3)
    newArray.push(value4)
    newArray.push(value5)


    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Aug'})
})

export default year2021Router 