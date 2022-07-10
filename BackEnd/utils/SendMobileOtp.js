var unirest = require("unirest");

const SendMobileOtp = async (options) => {
  var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

  req.query({
    authorization: process.env.FAST2SMS_API_KEY,
    variables_values: options.otp,
    route: "otp",
    numbers: options.MobileNumber,
  });

  req.end((res) => {
    console.log(res.body);
    if (res.error) throw new Error(res.error);

  });
};
module.exports = SendMobileOtp;
