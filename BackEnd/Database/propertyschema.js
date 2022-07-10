// Requiring Mongoose
const mongoose = require("mongoose");

// Requiring validator
const validator = require("validator");

const propertyschema = new mongoose.Schema({
  Property_Details: {
    Type: {
      type: String,
      // required: [true, " Please Enter Type"],
    },
    Service: {
      type: String,
      // required: [true, "Plese Enter Service"],
    },
    Property_Type: {
      type: String,
    },
    Construction_Status: {
      type: String,
    },
    Age_of_Property: {
      type: Number,
    },
    Offers: {
      type: String,
    },
    Maintainance_Charges: {
      type: Number,
    },
    BHK: {
      type: Number,
    },
    Bathroom: {
      type: Number,
    },
    Balcony: {
      type: Number,
    },
    Furnish_Type: {
      type: String,
    },
    Covered_Parking: {
      type: Number,
    },
    Open_Parking: {
      type: Number,
    },
    Cost: {
      type: Number,
    },
    BuiltUp_Area: {
      type: Number,
    },
    Carpet_Area: {
      type: Number,
    },
    Possession_Status: {
      type: String,
    },
    Possession_Date: {
      type: Date,
    },
    Plot_Price: {
      type: Number,
    },
    Plot_Area: {
      type: Number,
    },
    Area_Unit: {
      type: Number,
    },
    Length: {
      type: Number,
    },
    Width: {
      type: Number,
    },
    Width_of_Facing_Road: {
      type: String,
    },
    Available_From: {
      type: Date,
    },
    Monthly_Rent: {
      type: Date,
    },
    Security_Deposit: {
      type: Number,
    },
    Tenant_Type: {
      type: String,
    },
    PG_Name: {
      type: String,
    },
    Total_Beds: {
      type: String,
    },
    For: {
      type: String,
    },
    Best_For: [
      {
        type: String,
      },
    ],
    Meals_Offerings: [
      {
        type: String,
      },
    ],
    Meals_Speciality: [
      {
        type: String,
      },
    ],
    Notice_Period: [
      {
        type: Number,
      },
    ],
    Lock_in_Period: [
      {
        type: Number,
      },
    ],
    Common_Areas: [
      {
        type: Number,
      },
    ],
    Managed_By: {
      type: String,
    },
    Manager_Stays: {
      type: Boolean,
    },
    Non_Veg_Allowed: {
      type: Boolean,
    },
    Opposite_Sex_Allowed: {
      type: Boolean,
    },
    Any_Time_Allowed: {
      type: Boolean,
    },
    Visitors_Allowed: {
      type: Boolean,
    },
    Guardian_Allowed: {
      type: Boolean,
    },
    Drinking_Allowed: {
      type: Boolean,
    },
    Smoking_Allowed: {
      type: Boolean,
    },
    Available_From: {
      type: Date,
    },
    Zone_Type: {
      type: String,
    },
    Suitable_For: [
      {
        type: String,
      },
    ],
    Location_Hub: {
      type: String,
    },
    Property_Condition: {
      type: String,
    },
    Entrance: {
      type: Number,
    },
    Cieling: {
      type: Number,
    },
    Located_Near: [
      {
        type: String,
      },
    ],
    Ownership: {
      type: String,
    },
    Expected_Rent: {
      type: Number,
    },
    Expected_Rent_Increase: {
      type: Number,
    },
    Price: {
      type: Number,
    },
    Negotiable: {
      type: Boolean,
    },
    Tax_Included: {
      type: Boolean,
    },
    DG_UPS_Included: {
      type: Boolean,
    },
    Electricity_Included: {
      type: Boolean,
    },
    Water_Included: {
      type: Boolean,
    },
  },
  Property_Address: {
    City: {
      type: String,
    },
    Project_Name: {
      type: String,
    },
    Locality: {
      type: String,
    },
    Flat_No: {
      type: Number,
    },
    Floor_No: {
      type: Number,
    },
    Total_Floors: {
      type: Number,
    },
  },
  Lock_in_Period: {
    type: Number,
  },
  Facing: {
    type: String,
  },
  Address: {
    type: String,
  },
  Servent_Romm: {
    type: Boolean,
  },
  Decription: {
    type: String,
  },
  Amenities: [
    {
      type: String,
    },
  ],
  Ratings: {
    type: Number,
    default: 0,
  },
  Images: [
    {
      type:String
    },
  ],
  Verification: {
    Document: {
      type: String,
    },
  },
  NumofReviews: {
    type: Number,
    default: 0,
  },
  Reviews: [
    {
      User: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      Name: {
        type: String,
        required: true,
      },
      Rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  User: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  Approved: {
    type: Boolean,
    default: false,
  },
});

const Property = mongoose.model("Property", propertyschema);

module.exports = Property;
