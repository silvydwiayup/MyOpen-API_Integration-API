import React, { useState } from "react";
import './Add_New_Project.css';

const Add_New_Project = ({ show, setShow }) => {
    const [projectName, setProjectName] = useState("");

    if (!show) return null;

    const handleChange = (e) => setProjectName(e.target.value);
    const handleClose = () => setShow(false);

    return (
        <div className="modal-overlay-add-new-project">
            <div className="modal-content-add-new-project">
                <button className="btn-close-top-right-add-new-project" onClick={handleClose}>×</button>
                <h3>Add New Project</h3>
                <div className="input-group-add-new-project">
                    <label htmlFor="projectName">Project Name</label>
                    <input
                        id="projectName"
                        type="text"
                        value={projectName}
                        onChange={handleChange}
                        placeholder="Add project name"
                    />
                </div>

                <div className="modal-buttons-add-new-project">
                    <button className="btn-close-add-new-project" onClick={handleClose}>Cancel</button>
                    <button className="btn-add-add-new-project">Add New Project</button>
                </div>

            </div>
        </div>
    );
};

export default Add_New_Project;
