// Requiring Express 
const express = require('express');
const { generateotp} = require('../Controllers/otpcontroller');
const app = express()

// Requiring Router 
const router = express.Router()

router.post('/otp/generate',generateotp)

module.exports = router