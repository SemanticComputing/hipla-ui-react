import {
  FETCH_RESULTS,
  FETCH_PLACES,
  FETCH_PLACE,
  UPDATE_RESULTS,
  UPDATE_PLACES,
  UPDATE_PLACE,
  UPDATE_PAGE,
  SORT_RESULTS,
} from '../actions';

export const INITIAL_STATE = {
  resultCount: 0,
  results: [],
  places: [],
  place: {},
  page: -1,
  pagesize: 5,
  sortBy: 'productionPlace',
  sortDirection: 'asc',
  fetchingPlaces: false,
  fetchingResults: false
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RESULTS:
      return { ...state, fetchingResults: true };
    case FETCH_PLACES:
      return { ...state, fetchingPlaces: true };
    case FETCH_PLACE:
      return { ...state, fetchingPlaces: true };
    case SORT_RESULTS:
      return updateSortBy(state, action);
    case UPDATE_RESULTS:
      return {
        ...state,
        resultCount: parseInt(action.data.resultCount),
        results: action.data.results,
        fetchingResults: false
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case UPDATE_PLACES:
      return {
        ...state,
        places: action.places,
        fetchingPlaces: false
      };
    case UPDATE_PLACE:
      return {
        ...state,
        place: action.place,
        fetchingPlaces: false
      };
    default:
      return state;
  }
};

const updateSortBy = (state, action) => {
  if (state.sortBy === action.sortBy) {
    return {
      ...state,
      sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc'
    };
  } else {
    return {
      ...state,
      sortBy: action.sortBy,
      sortDirection: 'asc'
    };
  }
};

export default search;
