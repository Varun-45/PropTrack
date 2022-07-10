// Requiring Mongoose 
const mongoose = require('mongoose');

// Requiring validator 
const validator = require('validator');

const otpschema = new mongoose.Schema({
    MobileNumber: {
        type: Number,
    },
    Email: {
        type: String,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    otp:Number,
    otpexpire:Date,
}, { timestamps: true })

otpschema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

const OTP = mongoose.model('otp', otpschema)

module.exports = OTP