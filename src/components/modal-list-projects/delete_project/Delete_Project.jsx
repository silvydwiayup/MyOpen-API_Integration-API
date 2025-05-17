import React from 'react';
import './Delete_Project.css';
import { SlClose } from "react-icons/sl";

const Delete_Project = ({ show, setShow, project }) => {
  if (!show) return null;

  const handleDelete = () => {
    console.log("Deleting project:", project);
    setShow(false);
  };

  return (
    <div className="modal-overlay-delete-project">
      <div className="modal-container-delete-project">
        <button className="btn-close-delete-project" onClick={() => setShow(false)}>
          &times;
        </button>

        <div className="delete-icon-wrapper">
          <SlClose className="delete-icon-project" />
        </div>

        <h3 className="modal-title-delete-project">Are You Sure?</h3>
        <p className="modal-description-delete-project">
          Do you really want to delete <strong>{project?.name}</strong>? 
        </p>

        <div className="modal-footer-delete-project">
          <button className="btn-confirm-delete-project" onClick={handleDelete}>Yes, delete it!</button>
          <button className="btn-cancel-delete-project" onClick={() => setShow(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Delete_Project;
