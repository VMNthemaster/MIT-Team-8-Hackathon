import express from 'express'
import year2022 from '../models/2022.js'

const year2022Router = express.Router()

year2022Router.post('/yearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2022.find({})
    } catch (error) {
        return res.json({success: false}) 
    }

    const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jan') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 

    }
    const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Aug'))[0]
    if(!newDocument2){
        return res.json({success: false}) 

    }
    const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)

    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Aug'})
})

year2022Router.post('/halfYearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2022.find({})
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

    const newDocument3 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Aug'))[0]
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

year2022Router.post('/quarterYearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2022.find({})
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
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)
    newArray.push(value3)

    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Oct'})
})



export default year2022Router 