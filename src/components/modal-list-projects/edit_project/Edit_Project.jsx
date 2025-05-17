import React, { useState } from "react";
import './Edit_Project.css';

const Edit_Project = ({ show, setShow }) => {
    const [projectName, setProjectName] = useState("");

    if (!show) return null;

    const handleChange = (e) => setProjectName(e.target.value);
    const handleClose = () => setShow(false);

    return (
        <div className="modal-overlay-edit-project">
            <div className="modal-content-edit-project">
            <button className="btn-close-top-right-edit-project" onClick={handleClose}>×</button>
                <h3>Edit Project</h3>
                <div className="input-group-edit-project">
                    <label htmlFor="projectName-edit-project">Edit Project Name</label>
                    <input
                        id="projectName-edit-project"
                        type="text"
                        value={projectName}
                        onChange={handleChange}
                        placeholder="Edit project name"
                    />
                </div>

                <div className="modal-buttons-edit-project">
                    <button className="btn-close-edit-project" onClick={handleClose}>Cancel</button>
                    <button className="btn-save-edit-project">Save</button>
                </div>

            </div>
        </div>
    );
};

export default Edit_Project;
