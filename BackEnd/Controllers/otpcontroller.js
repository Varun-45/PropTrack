const OTP = require("../Database/otpschema");
const User = require("../Database/userschema");
const catchasyncerrors = require("../Middlewares/catchasyncerrors");
const ErrorHandler = require("../utils/errorhandler");
const SendMobileOtp = require("../utils/SendMobileOtp");
const SendEmail = require("../utils/SendEmail");

// OTP generate
exports.generateotp = catchasyncerrors(async (req, res, next) => {
  const { Email_MobileNumber} = req.body;
  
  var phoneValidation = /^\d{10}$/;
  var mailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let useralready;
  let value;
  let Already;
  if (phoneValidation.test(Email_MobileNumber)) {
    // correct phone structure
    useralready = await User.findOne({ MobileNumber: Email_MobileNumber });
    Already = await OTP.findOne({ MobileNumber: Email_MobileNumber });
    value = "MobileNumber";
  } else if (mailValidation.test(Email_MobileNumber)) {
    // correct mail format
    useralready = await User.findOne({ Email: Email_MobileNumber });
    Already = await OTP.findOne({ Email: Email_MobileNumber });
    value = "Email";
  } else {
    return next(new ErrorHandler("Please Enter a Valid Email OR MobileNumber"));
  }
  
  const otp = Math.floor(100000 + Math.random() * 900000);
  
  const otpexpire = new Date(Date.now()+10*60*1000);
  
  if (Already) {
    await Already.deleteOne();
  }
  
  if (value == "MobileNumber") {
    await OTP.create({ MobileNumber: Email_MobileNumber, otp, otpexpire });
    try {
        await SendMobileOtp({
          MobileNumber: Email_MobileNumber,
          otp,
        });  
        res.status(200).json({
          success: true,
          message: "OTP Sent",
          useralready:useralready ? true : false
        });
      } catch (error) {
        await OTP.deleteOne({ MobileNumber: Email_MobileNumber });
        return next(new ErrorHandler(error.message, 500));
      }
    } else if (value == "Email") {
      const message = `Your Verification token is :- \n\n ${otp}`;
      await OTP.create({ Email: Email_MobileNumber, otp, otpexpire });
      try {
        // console.log(Email_MobileNumber)
        await SendEmail({
          email: Email_MobileNumber,
          subject: "PropTrack Email Verification",
          message,
        });
        res.status(200).json({
          success: true,
          message: "Email Sent",
          useralready:useralready ? true : false
        });
      } catch (error) {
        await OTP.deleteOne({ Email: Email_MobileNumber });
        return next(new ErrorHandler(error.message, 500));
      }
    }
});
