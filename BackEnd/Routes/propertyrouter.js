// Requiring Express
const express = require("express");
const app = express();

// Requiring Router
const router = express.Router();

// Requiring Middlewares
const { authuser, authroles } = require("../Middlewares/authorize");

// Requiring controllers
const {
  getallproperties,
  addnewproperty,
  updateproperty,
  deleteproperty,
  getproperty,
  createpropertyreview,
  getpropertyReviews,
  deleteReview,
  getAdminproperties,
} = require("../Controllers/propertycontroller");

router.post("/auth/property/new",addnewproperty);

router
.route("/auth/property/:id")
.put(authuser, updateproperty)
  .delete(authuser, deleteproperty);
  
  router.get("/properties", getallproperties);
  router.route("/property/:id").get(getproperty);
  
router.put("/property/:id/review", authuser, createpropertyreview);
router.route("/reviews").get(getpropertyReviews).delete(authuser, deleteReview);

// ADMIN
router.route("/admin/property").get(authuser, authroles("admin"), getAdminproperties);


// Exporting Router
module.exports = router;
