import {
  DEPLOYMENT_FETCH_SUCCESS,
  DEPLOYMENT_FETCH_START,
  DEPLOYMENT_FETCH_FAIL,
  DEPLOYMENT_ADD_START,
  DEPLOYMENT_ADD_SUCCESS,
  DEPLOYMENT_ADD_FAIL,
  DEPLOYMENT_UPDATE_START,
  DEPLOYMENT_UPDATE_SUCCESS,
  DEPLOYMENT_UPDATE_FAIL,
  DEPLOYMENT_REMOVE_START,
  DEPLOYMENT_REMOVE_SUCCESS,
  DEPLOYMENT_REMOVE_FAIL
} from "../Actions/deploymentActions";

const initialState = {
  deployments: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DEPLOYMENT_FETCH_SUCCESS:
      return { ...state, deployments: payload, error: null, loading: false };
    case DEPLOYMENT_FETCH_START:
      return { ...state, loading: true, error: null };
    case DEPLOYMENT_FETCH_FAIL:
      return { ...state, error: payload, loading: false };

    case DEPLOYMENT_UPDATE_SUCCESS: {
      let items = state.deployments;
      const currentdeployment = items.find(a => a._id == payload._id);

      const index = items.indexOf(currentdeployment);

      items[index] = payload;
      return {
        ...state,

        deployments: [...items],
        loading: false,
        error: null
      };
    }
    case DEPLOYMENT_UPDATE_START:
      return { ...state, loading: true, error: null };
    case DEPLOYMENT_UPDATE_FAIL:
      return { ...state, error: payload, loading: false };

    case DEPLOYMENT_ADD_SUCCESS:
      return {
        ...state,
        deployments: [payload, ...state.deployments],
        loading: false,
        error: null
      };
    case DEPLOYMENT_ADD_START:
      return { ...state, loading: true, error: null };
    case DEPLOYMENT_ADD_FAIL:
      return { ...state, error: payload, loading: false };

    case DEPLOYMENT_REMOVE_SUCCESS:
      return {
        ...state,

        deployments: [...state.deployments.filter(a => a._id != payload)],
        loading: false,
        error: null
      };
    case DEPLOYMENT_REMOVE_START:
      return { ...state, loading: true, error: null };
    case DEPLOYMENT_REMOVE_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
