import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import {
  AllPropertyReviewsReducer,
  DeleteReviewReducer,
  NewPropertyReducer,
  NewReviewReducer,
  PropertyDetailsReducer,
  PropertyReducer,
  UPDELPropertyReducer,
} from "./Reducers/propertyreducer";
import { AllUsersReducer, ForgotPasswordReducer, OtpReducer, ProfileReducer, UserDetailsReducer, UserReducer } from "./Reducers/userreducer";

const reducer = combineReducers({
  AllOwnerProperties: PropertyReducer,
  PropertyDetails: PropertyDetailsReducer,
  NewProperty: NewPropertyReducer,
  UpDelProperty: UPDELPropertyReducer,
  NewReview: NewReviewReducer,
  PropertyReviews: AllPropertyReviewsReducer,
  Review:DeleteReviewReducer,
  User: UserReducer,
  Otp:OtpReducer,
  Profile: ProfileReducer,
  ForgotPassword: ForgotPasswordReducer,
  // timeelapsed: timeelapsedreducer,
  
  // Admin
  AllUsers: AllUsersReducer,
  UserDetails: UserDetailsReducer
});

let initialState = {
  // cart: {
  //   cartItems: localStorage.getItem("Cart")
  //     ? JSON.parse(localStorage.getItem("Cart"))
  //     : [],
  //   shippingInfo: localStorage.getItem("ShippingInfo")
  //     ? JSON.parse(localStorage.getItem("ShippingInfo"))
  //     : [],
  // },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
