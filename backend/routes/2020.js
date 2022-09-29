import express from 'express'
import year2020 from '../models/2020.js'

const year2020Router = express.Router()

year2020Router.post('/yearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body
    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2020.find({})
        console.log(allDocuments)
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

year2020Router.post('/halfYearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2020.find({})
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

year2020Router.post('/quarterYearlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2020.find({})
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

year2020Router.post('/monthlyData', async (req, res) => {
    const {firstCurrency, secondCurrency} = req.body

    const list = [firstCurrency, secondCurrency]
    let allDocuments

    try {
        allDocuments = await year2020.find({})
    } catch (error) {
        return res.json({success: false}) 
    }

    const newDocument1 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jan') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value1 = Number(newDocument1[`${list[1]}`])/Number(newDocument1[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument2 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Feb') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value2 = Number(newDocument2[`${list[1]}`])/Number(newDocument2[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument3 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Mar') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value3 = Number(newDocument3[`${list[1]}`])/Number(newDocument3[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument4 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Apr') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value4 = Number(newDocument4[`${list[1]}`])/Number(newDocument4[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument5 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('May') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value5 = Number(newDocument5[`${list[1]}`])/Number(newDocument5[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument6 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jun') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value6 = Number(newDocument6[`${list[1]}`])/Number(newDocument6[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument7 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Jul') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value7 = Number(newDocument7[`${list[1]}`])/Number(newDocument7[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument8 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Aug') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value8 = Number(newDocument8[`${list[1]}`])/Number(newDocument8[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument9 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Sep') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value9 = Number(newDocument9[`${list[1]}`])/Number(newDocument9[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument10 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Oct') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value10 = Number(newDocument10[`${list[1]}`])/Number(newDocument10[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument11 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Nov') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value11 = Number(newDocument11[`${list[1]}`])/Number(newDocument11[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }

    const newDocument12 = allDocuments.filter(singleDocument =>  singleDocument.Date.includes('Dec') && singleDocument[`${list[0]}`] !== "" && singleDocument[`${list[1]}`] !== "")[0]
    const value12 = Number(newDocument12[`${list[1]}`])/Number(newDocument12[`${list[0]}`])
    if(!newDocument1){
        return res.json({success: false}) 
    }
    
    
    const newArray = []
    newArray.push(value1)
    newArray.push(value2)
    newArray.push(value3)
    newArray.push(value4)
    newArray.push(value5)
    newArray.push(value6)
    newArray.push(value7)
    newArray.push(value8)
    newArray.push(value9)
    newArray.push(value10)
    newArray.push(value11)
    newArray.push(value12)


    return res.json({success: true, newArray, firstMonth: 'Jan', lastMonth: 'Aug'})
})

export default year2020Router 