import { GET_HOMEPAGE, GET_PICTURE_DETAIL } from "../types/HomepageTypes";

const initialState = {
    images: [],
    favoriteImages: null,
    pictureDetail: []
}

const HomepageReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
      case GET_HOMEPAGE:
        return {
          ...state,
          images: payload,
        }
      case GET_PICTURE_DETAIL:
        return {
          ...state,
          pictureDetail: payload,
        }
    default:
      return state;
    }
}

export default HomepageReducer;