// Requiring User collection form Database
const User = require("../Database/userschema");

// Requiring bcryptjs
const bcryptjs = require("bcryptjs");

// Requiring ErrorHandlers Middlewares
const catchAsyncErrors = require("../Middlewares/catchasyncerrors");
const ErrorHandler = require("../utils/errorhandler");

// Requiring sendEmail
const sendEmail = require("../utils/SendEmail.js");

// Requiring jwttoken generate and save
const sendtoken = require("../utils/SendJwtToken");

// Requiring Crypto
const crypto = require("crypto");

// Requiring Cloudinary
const cloudinary = require("cloudinary");
const OTP = require("../Database/otpschema");

// Home Page
exports.homecontroller = (req, res, next) => {
  res.status(200).json({
    message: "home",
  });
};

// User Registeration
exports.registeruser = catchAsyncErrors(async (req, res, next) => {
  const { Name, Email_MobileNumber, Password, CPassword, Code, Avatar } =
    req.body;

  var phoneValidation = /^\d{10}$/;
  var mailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let useralready;
  let otpverify;
  let value;
  if (String(Email_MobileNumber).match(phoneValidation)) {
    // correct phone structure
    useralready = await User.findOne({ MobileNumber: Email_MobileNumber });
    otpverify = await OTP.findOne({
      MobileNumber: Email_MobileNumber,
      otp: Code,
      otpexpire: { $gt: Date.now() },
    });
    value = "MobileNumber";
  } else if (String(Email_MobileNumber).match(mailValidation)) {
    // correct mail format
    useralready = await User.findOne({ Email: Email_MobileNumber });
    otpverify = await OTP.findOne({
      Email: Email_MobileNumber,
      otp: Code,
      otpexpire: { $gt: Date.now() },
    });
    value = "Email";
  } else {
    return next(new ErrorHandler("Please Enter a Valid Email OR MobileNumber"));
  }

  if (!useralready) {
    if (!otpverify) {
      return next(new ErrorHandler("Code is Invalid or has been Expired", 404));
    }

    if (!Password || !CPassword || Password !== CPassword) {
      return next(new ErrorHandler("Passwords dont Match", 400));
    }

    const userdata = {
      Name,
      Password,
    };
    if (value == "MobileNumber") {
      userdata.MobileNumber = Email_MobileNumber;
    } else if (value == "Email") {
      userdata.Email = Email_MobileNumber;
    }
    if (Avatar?.startsWith("data:image") && Avatar.length > 1000) {
      const mycloud = await cloudinary.v2.uploader.upload(Avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
        public_id: `${Date.now()}`,
        resource_type: "auto",
      });
      userdata.Avatar = {
        public_id: mycloud.public_id,
        url: mycloud.secure_url,
      };
    }

    const user = await User.create(userdata);

    await otpverify.deleteOne();

    if (!user) {
      return next(new ErrorHandler("Invalid Credentials", 400));
    } else {
      sendtoken(user, 201, res);
    }
  } else {
    return next(new ErrorHandler("User Already exist", 400));
  }
});

// User Login
exports.loginuser = catchAsyncErrors(async (req, res, next) => {
  const { Email_MobileNumber, Password, Code } = req.body;

  // if (!Email_MobileNumber || !Password) {
  //   return next(new ErrorHandler("Please Enter Email And Password", 401));
  // }

  var phoneValidation = /^\d{10}$/;
  var mailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let user;
  let value;
  let otpverify=false
  if (phoneValidation.test(Email_MobileNumber)) {
    // correct phone structure
    user = await User.findOne({ MobileNumber: Email_MobileNumber }).select(
      "+Password"
    );
    if (Code) {
      otpverify = await OTP.findOne({
        MobileNumber: Email_MobileNumber,
        otp: Code,
        otpexpire: { $gt: Date.now() },
      });
    }
    value = "MobileNumber";
  } else if (mailValidation.test(Email_MobileNumber)) {
    // correct mail format
    user = await User.findOne({ Email: Email_MobileNumber }).select(
      "+Password"
    );
    if (Code) {
      otpverify = await OTP.findOne({
        Email: Email_MobileNumber,
        otp: Code,
        otpexpire: { $gt: Date.now() },
      });
    }
    value = "Email";
  } else {
    return next(new ErrorHandler("Please Enter a Valid Email OR MobileNumber"));
  }

  // console.log(user)
  if (!user) {
    return next(new ErrorHandler("No user found", 400));
  } else if (otpverify) {
    await otpverify.deleteOne();
    sendtoken(user, 200, res);
  } else {
    const isMatch = await bcryptjs.compare(Password, user.Password);
    if (isMatch) {
      sendtoken(user, 200, res);
    } else {
      return next(new ErrorHandler("Invalid Credentials", 401));
    }
  }
});

// User Logout
exports.logoutuser = catchAsyncErrors(async (req, res, next) => {
  req.user.Tokens = req.user.Tokens.filter(
    (i) => i.Token !== req.cookies.jwttoken
  );
  await req.user.save();

  res.clearCookie("jwttoken").json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot Password
exports.forgotpass = catchAsyncErrors(async (req, res, next) => {
  const { Email_MobileNumber } = req.body;

  var phoneValidation = /^\d{10}$/;
  var mailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let user;
  let value;
  if (String(Email_MobileNumber).match(phoneValidation)) {
    // correct phone structure
    user = await User.findOne({ MobileNumber: Email_MobileNumber });
    value = "MobileNumber";
  } else if (String(Email_MobileNumber).match(mailValidation)) {
    // correct mail format
    user = await User.findOne({ Email: Email_MobileNumber });
    value = "Email";
  } else {
    return next(new ErrorHandler("Please Enter a Valid Email OR MobileNumber"));
  }

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  
  const resettoken = await user.generateresettoken();

  if (value == "MobileNumber") {
  } else if (value == "Email") {
    const resetpasswordurl = `${req.protocol}://${req.get(
      "host"
    )}/reset/${resettoken}`;

    const message = `Your password reset token is :- \n\n ${resetpasswordurl} \n\nIf you havent requested`;

    try {
      await sendEmail({
        email: user.Email,
        subject: "Ecommerce Password Recovery",
        message,
      });
      res.status(200).json({
        success: true,
        message: "Email Sent",
        resettoken,
      });
    } catch (error) {
      user.resetpasswordtoken = undefined;
      user.resetpasswordexpire = undefined;
      await user.save();
      return next(new ErrorHandler(error.message, 500));
    }
  }
});

// Reset Password
exports.resetpass = async (req, res, next) => {
  const resetpasswordtoken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetpasswordtoken,
    resetpasswordexpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHandler("Token is Invalid or has been Expired ", 404));
  }

  if (req.body.Password !== req.body.CPassword) {
    return next(new ErrorHandler("Passwords dont Match", 400));
  }

  user.Password = req.body.Password;
  user.resetpasswordtoken = undefined;
  user.resetpasswordexpire = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
};

// Admin Page
exports.admin = (req, res, next) => {
  res.status(200).json({
    message: "Admin",
  });
};

// Me Page
exports.getuserdetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.id });

  res.status(200).json({
    success: true,
    user,
  });
});

// Update Password
exports.updatepassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.id }).select("+Password");

  const { Password, newPass, newCPass } = req.body;

  const isPassMatch = await bcryptjs.compare(Password, user.Password);

  if (!isPassMatch) {
    return next(new ErrorHandler("Invalid Current Password", 400));
  }

  if (newPass !== newCPass) {
    return next(new ErrorHandler("Passwords dont Match", 400));
  }

  user.Password = newPass;
  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

// Update Profile
exports.updateprofile = catchAsyncErrors(async (req, res, next) => {
  const update = {
    Name: req.body.Name,
    MobileNumber: req.body.MobileNumber && req.body.MobileNumber,
    Email: req.body.Email && req.body.Email,
  };

  if (req.body.Avatar !== "") {
    const useralready = await User.findById(req.user.id);
    await cloudinary.v2.uploader.destroy(useralready.Avatar.public_id);

    const mycloud = await cloudinary.v2.uploader.upload(req.body.Avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });
    update.Avatar = {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, update, { new: true });

  res.status(200).json({
    success: true,
    user,
  });
});

// Get All Users --Admin
exports.getallusers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get Single User --Admin
exports.getsingleuser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("No user found", 400));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Update Roles --Admin
exports.updateuserprofile = catchAsyncErrors(async (req, res, next) => {
  const update = {
    Role: req.body.Role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, update, {
    new: true,
  });

  if (!user) {
    return next(new ErrorHandler("No user found", 400));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete Profile --Admin
exports.deleteuserprofile = catchAsyncErrors(async (req, res, next) => {
  const userdeleted = await User.findByIdAndDelete(req.params.id);
  // console.log(userdeleted)
  if (!userdeleted) {
    return next(new ErrorHandler("No user found", 400));
  }

  res.status(200).json({
    success: true,
    userdeleted,
    message: "User Deleted!",
  });
});

exports.usersaveproperty = catchAsyncErrors(async (req, res, next) => {
  const update = {
    Property: req.params.productid,
  };
  const user = await User.findById(req.user.id);

  const isreviewed = await user.Saved.find(
    (element) => element.Property.toString() === req.params.productid.toString()
  );
  if (isreviewed) {
    res.status(200).json({
      success: true,
      user,
      message: "Property Already Saved!",
    });
  } else {
    await user.Saved.concat(update);
    res.status(200).json({
      success: true,
      user,
      message: "Property Saved!",
    });
  }
});
