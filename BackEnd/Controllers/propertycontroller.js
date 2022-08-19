// Requiring property Collection from Database
const Property = require("../Database/propertyschema");

// Requiring ErrorHandlers Middlewares
const catchAsyncErrors = require("../Middlewares/catchasyncerrors");
const ErrorHandler = require("../utils/errorhandler");

const ApiFeatures = require("../utils/apifeatures");

const cloudinary = require("cloudinary");
const catchasyncerrors = require("../Middlewares/catchasyncerrors");
const User = require("../Database/userschema");

// Add New property --Admin
exports.addnewproperty = catchAsyncErrors(async (req, res, next) => {
  // console.log(bodycopy)
  let images = [];

  // if (typeof req.body.Images === "string") {
  //   images.push(req.body.Images);
  // } else {
  //   images = req.body.Images;
  // }

  // const imagesLinks = [];
  // if (
  //   req.body.Images?.startsWith("data:image") &&
  //   req.body.Images.length > 1000
  // ) {
  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "property",
  //       width: 150,
  //       crop: "scale",
  //       public_id: `${Date.now()}`,
  //       resource_type: "auto",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }
  //   req.body.Images = imagesLinks;
  // }
  req.body.User = req.user.id;


  const property = await Property.create(req.body);

  res.status(200).json({
    success: true,
    property,
  });
});

// Get All property
exports.getallproperties = catchAsyncErrors(async (req, res, next) => {
  // return await next(new ErrorHandler('this is temp error',404))

  const resultPerPage = 10;
  const propertycount = await Property.countDocuments();

  const apifeatures = new ApiFeatures(Property.find().populate('user'), req.query).filter()

  let filteredpropertyCount = await apifeatures.query.clone();
  filteredpropertyCount = filteredpropertyCount.length;

  apifeatures.pagination(resultPerPage);

  const properties = await apifeatures.query;

  res.status(200).json({
    success: true,
    properties,
    propertycount,
    resultPerPage,
    filteredpropertyCount,
  });
});

// Get All property (Admin)
exports.getAdminproperties = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.find();

  res.status(200).json({
    success: true,
    property,
  });
});

// Get property Details
exports.getproperty = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("No property found", 400));
  }

  res.status(200).json({
    success: true,
    property,
  });
});

// Update property --Admin
exports.updateproperty = catchAsyncErrors(async (req, res, next) => {
  const alreadyproperty = await Property.findById(req.params.id);

  if (!alreadyproperty) {
    return next(new ErrorHandler("No property found", 400));
  }
  if (req.body.Images !== "") {
    let images = [];

    if (typeof req.body.Images === "string") {
      images.push(req.body.Images);
    } else {
      images = req.body.Images;
    }

    const imagesLinks = [];

    // console.log(property.Images.length)
    for (let i = 0; i < alreadyproperty.Images.length; i++) {
      await cloudinary.v2.uploader.destroy(alreadyproperty.Images[i].public_id);
    }

    // console.log(images.length)
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "property",
        width: 150,
        crop: "scale",
        public_id: `${Date.now()}`,
        resource_type: "auto",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.Images = imagesLinks;
  }
  req.body.User = req.user.id;
  
  const bodycopy = { ...req.body };
  bodycopy.Property_Details = req.body;
  bodycopy.Property_Address = req.body;

  const property = await Property.findByIdAndUpdate(req.params.id, bodycopy, {
    new: true,
  });
  // console.log(property)
  res.status(200).json({
    success: true,
    property,
  });
});

// Delete property --Admin
exports.deleteproperty = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("No property found", 400));
  }

  await property.delete();

  res.status(200).json({
    success: true,
  });
});

// Create new review or update the review
exports.createpropertyreview = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body)
  const { Rating, Comment } = req.body;
  const Reviews = {
    User: req.user._id,
    Name: req.user.Name,
    Rating,
    Comment,
  };

  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("property not found", 400));
  }

  const isreviewed = await Property.Reviews.find(
    (element) => element.User.toString() === req.user._id.toString()
  );

  if (isreviewed) {
    property.Reviews.forEach((element) => {
      if (element.User.toString() === req.user._id.toString()) {
        (element.Rating = Rating), (element.Comment = Comment);
      }
    });
  } else {
    await Property.Reviews.push(Reviews);
    property.NumofReviews = property.Reviews.length;
  }

  let avg = 0;
  property.Reviews.forEach((element) => {
    avg += element.Rating;
  });

  property.Ratings = avg / property.Reviews.length;

  await Property.save();

  res.status(200).json({
    success: true,
    property,
  });
});

// Get All Reviews of a property
exports.getpropertyReviews = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.query.id);
  if (!property) {
    return next(new ErrorHandler("property not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: property.Reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const property = await Property.findById(req.query.propertyId);

  if (!property) {
    return next(new ErrorHandler("property not found", 404));
  }

  const reviews = property.Reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let sum = 0;

  reviews.forEach((rev) => {
    sum += rev.Rating;
  });

  let avg = 0;

  if (reviews.length === 0) {
    avg = 0;
  } else {
    avg = sum / reviews.length;
  }

  const Ratings = avg;

  const numOfReviews = reviews.length;

  await Property.findByIdAndUpdate(
    req.query.propertyId,
    {
      Reviews: reviews,
      Ratings: Ratings,
      NumOfReviews: numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

exports.getmyproperties = catchasyncerrors(async(req,res,next)=>{
  const properties = await Property.find({User:req.params.id})
  res.status(200).json({
    success:true,
    properties
  })
})