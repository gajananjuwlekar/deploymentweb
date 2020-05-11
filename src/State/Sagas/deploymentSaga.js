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
import { put } from "redux-saga/effects";

import {
  CreateDeploymentRecord,
  EditDeploymentRecord,
  FetchDeployments,
  DeleteDeployment
} from "../../Services/Deployment/deploymentService";

export function* AddDeployment(action) {
  try {
    // we will start loading indicator
    yield put({ type: DEPLOYMENT_ADD_START });

    // we will add Deployment to db
    const { data } = yield CreateDeploymentRecord(action.payload);

    //finally update our app state
    yield put({ type: DEPLOYMENT_ADD_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: DEPLOYMENT_ADD_FAIL,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}

export function* UpdateDeployment(action) {
  try {
    // we will start loading indicator
    yield put({ type: DEPLOYMENT_UPDATE_START });

    // we will update Deployment to db
    const { data } = yield EditDeploymentRecord(
      action.payload.id,
      action.payload.data
    );

    //finally update our app state
    yield put({ type: DEPLOYMENT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: DEPLOYMENT_UPDATE_FAIL,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}

export function* RemoveDeployment(action) {
  try {
    // we will start loading indicator
    yield put({ type: DEPLOYMENT_REMOVE_START });

    // we will remove Deployment to db
    const { data } = yield DeleteDeployment(action.payload);

    //finally update our remove state
    yield put({ type: DEPLOYMENT_REMOVE_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({
      type: DEPLOYMENT_REMOVE_FAIL,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}

export function* FetchDeployment(action) {
  try {
    // we will start loading indicator
    yield put({ type: DEPLOYMENT_FETCH_START });

    // we will fetch Deployment from db
    const { data } = yield FetchDeployments();

    //finally update our app state
    yield put({ type: DEPLOYMENT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: DEPLOYMENT_FETCH_FAIL,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}
