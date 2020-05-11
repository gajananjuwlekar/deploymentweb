import axios from "axios";

import { API_URL } from "../../constants";

export const FetchDeployments = async () => {
  return axios.get(API_URL + "api/deployment");
};
export const GetDeploymentById = deploymentId => {
  return axios.get(API_URL + "api/deployment/" + deploymentId);
};
export const CreateDeploymentRecord = deployment => {
  return axios.post(API_URL + "api/deployment", deployment);
};
export const EditDeploymentRecord = (deploymentId, deployment) => {
  return axios.put(API_URL + "api/deployment/" + deploymentId, deployment);
};
export const DeleteDeployment = deploymentId => {
  return axios.delete(API_URL + "api/deployment/" + deploymentId);
};
