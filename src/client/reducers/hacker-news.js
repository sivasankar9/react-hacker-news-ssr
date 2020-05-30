import actions from '../actions-list';
import { updateLocalStorage } from '../../helpers/utils';

const initialState = {
  hits: [],
  nbHits: 0,
  page: 0,
  nbPages: 0,
  hitsPerPage: 0,
  exhaustiveNbHits: true,
  query: '',
  params: '',
  processingTimeMS: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_NEWS: {
      const hits = action.payload.hits.map((item) => {
        const localStorageItem = localStorage.getItem(item.objectID);

        return localStorageItem === null ? item : JSON.parse(localStorageItem);
      });

      return { ...state, ...action.payload, hits };
    }

    case actions.UPDATE_UPVOTE: {
      const { objectID } = action.payload;

      const hits = state.hits.map((item) => {
        return item.objectID === objectID
          ? updateLocalStorage(objectID, { ...item, points: item.points + 1 })
          : item;
      });

      return { ...state, hits };
    }

    case actions.HIDE_NEWS: {
      const { objectID } = action.payload;
      const hits = state.hits.map((item) => {
        return item.objectID === action.payload.objectID
          ? updateLocalStorage(objectID, { ...item, isVisible: false })
          : item;
      });

      return { ...state, hits };
    }
    case actions.ERROR: {

      return {state:{...initialState}, error:action.payload};
    }

    default:
      return state;
  }
};
