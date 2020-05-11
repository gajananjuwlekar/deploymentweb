
    import { takeEvery, takeLatest } from "redux-saga/effects";
    
        import {
            DEPLOYMENT_FETCH,
            DEPLOYMENT_ADD,
            DEPLOYMENT_UPDATE,
            DEPLOYMENT_REMOVE
          } from "../Actions/deploymentActions";
         
    
        import {
            FetchDeployment,
            UpdateDeployment,
            AddDeployment,
            RemoveDeployment
          } from "./deploymentSaga";
        
    export function* watchAuth() {
    
        yield takeEvery(DEPLOYMENT_FETCH, FetchDeployment);
        yield takeEvery(DEPLOYMENT_UPDATE, UpdateDeployment);
        yield takeEvery(DEPLOYMENT_ADD, AddDeployment);
        yield takeEvery(DEPLOYMENT_REMOVE, RemoveDeployment);
    }
    