import React, { useEffect, useState } from "react";
import CreateDeployment from "./deploymentCreate.component";
import EditDeployment from "./deploymentEdit.component";
import { useSelector, useDispatch } from "react-redux";
import { LoadingComponent } from "../Shared/LoadingComponent";
import { ErrorComponent } from "../Shared/ErrorComponent";
import { API_URL } from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Form } from "react-bootstrap";
import TablePagination from "../Shared/DataTable/Pagination";
import { faPlusCircle, faTrash, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import {
  DEPLOYMENT_FETCH,
  DEPLOYMENT_REMOVE
} from "../../State/Actions/deploymentActions";
export default function Deployments() {
  const { deployments, loading, error } = useSelector(
    state => state.deploymentState
  );
  const dispatch = useDispatch();
  const [showCreateDeploymentModal, setShowCreateDeploymentModal] = useState(
    false
  );
  const [showEditDeploymentModal, setShowEditDeploymentModal] = useState(false);
  const [selectedDeployment, setSelectedDeployment] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);
  const [DeploymentsToShow, setdeploymentsToShow] = useState([]);

  useEffect(async () => {
    // lets load our data for first time
    dispatch({ type: DEPLOYMENT_FETCH });
    return () => {};
  }, []);

  useEffect(() => {
    const deploymentsToSlice = [...deployments];
    //1 0
    // 2 9
    setdeploymentsToShow(
      deploymentsToSlice.splice((currentPage - 1) * pageSize, pageSize)
    );
    return () => {};
  }, [currentPage, pageSize, deployments]);

  const createDeployment = () => {
    setShowEditDeploymentModal(false);
    setShowCreateDeploymentModal(!showCreateDeploymentModal);
  };
  const editDeployment = item => {
    setSelectedDeployment(item);
    setShowEditDeploymentModal(!showEditDeploymentModal);
    setShowCreateDeploymentModal(false);
  };

  const deleteDeployment = item => {
    dispatch({ type: DEPLOYMENT_REMOVE, payload: item._id });
  };
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <>
      <div class="row col-10 p-3">
        <div class="col-lg-6 col-md-6 col-sm-12  mb-2">
          <button
            class="btn col-lg-2 col-md-2 col-sm-12 btn-primary float-left mx-auto"
            onClick={createDeployment}
          >Add
           <FontAwesomeIcon
          className=' ml-2'
          onClick={createDeployment} 
          icon={faPlusCircle}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <div className="col-lg-10 col-sm-12 col-md-10 p-3 card shadow-sm border-0">
        <Table border hover>
          <thead border>
            <tr>
              <th>#</th>
              <th>Url</th>
              <th>TemplateName</th>
              <th>Version</th>
              <th>DeployedAt</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {DeploymentsToShow &&
              DeploymentsToShow.length > 0 &&
              DeploymentsToShow.map((deployment, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{deployment.url}</td>
                    <td>{deployment.templateName}</td>
                    <td>{deployment.version}</td>
                    <td>{deployment.deployedAt}</td>

                    <td>
                      <div className="row">
                        <FontAwesomeIcon 
                        className='mr-4 text-primary'
                        type="button"
                        onClick={() => editDeployment(deployment)}
                        icon={faUserEdit}></FontAwesomeIcon>
                        <FontAwesomeIcon
                         className='mr-3 ml-5 text-danger' 
                        type="button"
                        onClick={() => deleteDeployment(deployment)}
                        icon={faTrash}></FontAwesomeIcon>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        {deployments && deployments.length > 0 && (
          <TablePagination
            activePage={currentPage}
            noOfPages={Math.round(deployments.length / pageSize)}
            onPageChange={setCurrentPage}
          ></TablePagination>
        )}

        <CreateDeployment
          handleClose={() => {
            setShowCreateDeploymentModal(false);
          }}
          show={showCreateDeploymentModal}
        ></CreateDeployment>
        <EditDeployment
          deploymentdb={selectedDeployment}
          handleClose={() => {
            setShowEditDeploymentModal(false);
          }}
          show={showEditDeploymentModal}
        ></EditDeployment>
      </div>
    </>
  );
}
