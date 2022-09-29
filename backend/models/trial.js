import mongoose from 'mongoose'

const trialSchema = new mongoose.Schema({
    date: {
        type: String
    },
    USD: {
        type: String
    },
    INR: {
        type: String
    },
    GBP: {
        type: String
    }

})

export default mongoose.model('Trial', trialSchema)