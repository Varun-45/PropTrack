import {
    ALL_PROPERTY_FAIL,
    ALL_PROPERTY_REQUEST,
    ALL_PROPERTY_SUCCESS,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_FAIL,
    PROPERTY_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    ADMIN_PROPERTY_REQUEST,
    ADMIN_PROPERTY_SUCCESS,
    ADMIN_PROPERTY_FAIL,
    NEW_PROPERTY_REQUEST,
    NEW_PROPERTY_SUCCESS,
    NEW_PROPERTY_FAIL,
    NEW_PROPERTY_RESET,
    NEW_BASIC_INFO_PROPERTY,
    NEW_ADDRESS_PROPERTY,
    UPDATE_PROPERTY_REQUEST,
    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_FAIL,
    UPDATE_PROPERTY_RESET,
    DELETE_PROPERTY_REQUEST,
    DELETE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAIL,
    DELETE_PROPERTY_RESET,
    CLEAR_ERRORS
  } from "../Constants/propertyconstants";
  
  export const PropertyReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
      case ALL_PROPERTY_REQUEST:
          case ADMIN_PROPERTY_REQUEST:
        return {
          loading: true,
          properties: [],
        };
      case ALL_PROPERTY_SUCCESS:
        return {
          loading: false,
          properties: action.payload.property,
          propertycount: action.payload.propertycount,
          resultPerPage: action.payload.resultPerPage,
          filteredpropertyCount: action.payload.filteredpropertyCount,
        };
      case ADMIN_PROPERTY_SUCCESS:
          return {
            loading: false,
            property: action.payload,
          };
      case ALL_PROPERTY_FAIL:
          case ADMIN_PROPERTY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const PropertyDetailsReducer = (state = { property: {} }, action) => {
    switch (action.type) {
      case PROPERTY_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case PROPERTY_DETAILS_SUCCESS:
        return {
          loading: false,
          property: action.payload,
        };
      case PROPERTY_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export const NewReviewReducer = (state = {}, action) => {
      switch (action.type) {
        case NEW_REVIEW_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case NEW_REVIEW_SUCCESS:
          return {
            loading: false,
            success: action.payload,
          };
        case NEW_REVIEW_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case NEW_REVIEW_RESET:
          return {
            ...state,
            success: false,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
    };
  
  export const AllPropertyReviewsReducer = (state = { reviews: [] }, action) => {
      switch (action.type) {
        case ALL_REVIEW_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case ALL_REVIEW_SUCCESS:
          return {
            loading: false,
            reviews: action.payload,
          };
        case ALL_REVIEW_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
    
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
    };
    
    export const DeleteReviewReducer = (state = {}, action) => {
      switch (action.type) {
        case DELETE_REVIEW_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case DELETE_REVIEW_SUCCESS:
          return {
            ...state,
            loading: false,
            isDeleted: action.payload,
          };
        case DELETE_REVIEW_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case DELETE_REVIEW_RESET:
          return {
            ...state,
            isDeleted: false,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
    };

    export const NewPropertyReducer = (state = {}, action) => {
      switch (action.type) {
        case NEW_BASIC_INFO_PROPERTY:
            return {
              ...state,
            Property_Details: action.payload,
          };
        case NEW_ADDRESS_PROPERTY:
            return {
              ...state,
              Property_Address: action.payload,
          };
        case NEW_PROPERTY_REQUEST:
          return {
            ...state,
            loading: true,
          };
          case NEW_PROPERTY_SUCCESS:
            return {
            loading: false,
            success: action.payload.success,
            property: action.payload.property,
          };
        case NEW_PROPERTY_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case NEW_PROPERTY_RESET:
          return {
            ...state,
            success: false,
          };
          case CLEAR_ERRORS:
            return {
              ...state,
            error: null,
          };
        default:
          return state;
      }
    };
    
  export const UPDELPropertyReducer = (state = {}, action) => {
      switch (action.type) {
        case DELETE_PROPERTY_REQUEST:
          case UPDATE_PROPERTY_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case DELETE_PROPERTY_SUCCESS:
          return {
            ...state,
            loading: false,
            isDeleted: action.payload,
          };
    
          case UPDATE_PROPERTY_SUCCESS:
          return {
            ...state,
            loading: false,
            isUpdated: action.payload,
          };
          case DELETE_PROPERTY_FAIL:
        case UPDATE_PROPERTY_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case DELETE_PROPERTY_RESET:
          return {
            ...state,
            isDeleted: false,
          };
        case UPDATE_PROPERTY_RESET:
          return {
            ...state,
            isUpdated: false,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
    };
    