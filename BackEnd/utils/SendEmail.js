const nodemailer = require('nodemailer');

const sendEmail = async(options)=>{
    try {
        
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
        port:465,
        service:process.env.SMTP_SERVICE,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        },
        
    })
    
    const mailoptions = {
        from:'Ecommerce',
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter.sendMail(mailoptions)
} catch (error) {
    // console.log(error);
}
}

module.exports = sendEmail