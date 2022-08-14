import axios from "axios";

import {
  ALL_PROPERTY_FAIL,
  ALL_PROPERTY_REQUEST,
  ALL_PROPERTY_SUCCESS,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  ADMIN_PROPERTY_REQUEST,
  ADMIN_PROPERTY_SUCCESS,
  ADMIN_PROPERTY_FAIL,
  NEW_PROPERTY_REQUEST,
  NEW_PROPERTY_SUCCESS,
  NEW_PROPERTY_FAIL,
  UPDATE_PROPERTY_REQUEST,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAIL,
  DELETE_PROPERTY_REQUEST,
  DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_FAIL,
  CLEAR_ERRORS,
} from "../Constants/propertyconstants";

// All Property
export const getallproperties =
  (keyword = "", currentPage = 1, price = [0, 200000], category, ratings = 0) =>
  async (dispatch) => {
    // 'category' argument will be of type 'Set'
    // 'keyword' argument will be a string of keywords separated by '?'
    try {
      dispatch({ type: ALL_PROPERTY_REQUEST });
      let link = `/api/v1/properties?keyword=${keyword}&page=${currentPage}&Price[gte]=${price[0]}&Price[lte]=${price[1]}&Ratings[gte]=${ratings}`;
      
      if (category) {
        link = `/api/v1/properties?keyword=${keyword}&page=${currentPage}&Price[gte]=${price[0]}&Price[lte]=${price[1]}&Category=${category}&Ratings[gte]=${ratings}`;
      }
      const { data } = await axios.get('/api/v1/properties');
      // console.log(data)

      dispatch({
        type: ALL_PROPERTY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PROPERTY_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// Property Details
export const getpropertydetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/property/${id}`);
    // console.log(data)

    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: data.property,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW REVIEW
export const newReview = (id, reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(`/api/v1/property/${id}/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Property
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Property
export const deleteReviews = (reviewId, propertyId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v1/reviews?id=${reviewId}&propertyId=${propertyId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get All Property For Admin
export const getAdminProperty = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_PROPERTY_REQUEST });
  
      const { data } = await axios.get("/api/v1/admin/property");
      // console.log(data)
  
      dispatch({
        type: ADMIN_PROPERTY_SUCCESS,
        payload: data.property,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_PROPERTY_FAIL,
        payload: 'error.response.data.message',
      });
    }
  };
  
  // Create Property
  export const createProperty = (propertyData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_PROPERTY_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/auth/property/new`,
        propertyData,
        config
      );
  
      dispatch({
        type: NEW_PROPERTY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_PROPERTY_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Property
  export const updateProperty = (id, propertyData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PROPERTY_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(
        `/api/v1/admin/property/${id}`,
        propertyData,
        config
      );
  
      dispatch({
        type: UPDATE_PROPERTY_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      // console.log(error.response)
      dispatch({
        type: UPDATE_PROPERTY_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Property
  export const deleteProperty = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PROPERTY_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/admin/property/${id}`);
  
      dispatch({
        type: DELETE_PROPERTY_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PROPERTY_FAIL,
        payload: error.response.data.message,
      });
    }
  };





// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
