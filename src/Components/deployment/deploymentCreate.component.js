import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import {
  CreateDeploymentRecord,
  FetchDeployments
} from "../../Services/Deployment/deploymentService";
import { DEPLOYMENT_ADD } from "../../State/Actions/deploymentActions";
import { useDispatch, useSelector } from "react-redux";
import { LoadingComponent } from "../Shared/LoadingComponent";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CreateDeployment({ show, handleClose }) {
  const [deployment, setDeployment] = useState({
    url: "",
    templateName: "",
    version: "",
    deployedAt: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  const handleChange = event => {
    console.log(event.target.value)
    setDeployment({ ...deployment, [event.target.name]: event.target.value });
  };

  const OnDeploymentCreate = async () => {
    dispatch({ type: DEPLOYMENT_ADD, payload: deployment });

    handleClose();
  };

  return (
    <Modal show={show} size="lg" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Deployment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Url</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="url"
                value={deployment.url}
                type="text"
                placeholder="Enter url"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>TemplateName</Form.Label>
              <Form.Control as="select"
              onChange={handleChange}
              name='templateName'
              value={deployment.templateName}
              >
           
              <option value='Template1'>Template1</option>
               <option value='Template2'>Template2</option>
              <option value='Template3'>Template3</option>
              <option value='Template4'>Template4</option>
              <option value='Template5'>Template5</option>

               </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Version</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="version"
                value={deployment.version}
                type="text"
                placeholder="Enter version"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>DeployedAt</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="deployedAt"
                value={deployment.deployedAt}
                type="date"
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={OnDeploymentCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
