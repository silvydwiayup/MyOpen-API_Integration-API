import React, { useState } from "react";
import './Add_New_Table.css';

const Add_New_Table = ({ show, setShow }) => {
    const [tableName, settableName] = useState("");

    if (!show) return null;

    const handleChange = (e) => settableName(e.target.value);
    const handleClose = () => setShow(false);

    return (
        <div className="modal-overlay-add-new-table">
            <div className="modal-content-add-new-table">
                <button className="btn-close-top-right-add-new-table" onClick={handleClose}>×</button>
                <h3>Add New Table</h3>
                <div className="input-group-add-new-table">
                    <label htmlFor="tableName">Table Name</label>
                    <input
                        id="tableName"
                        type="text"
                        value={tableName}
                        onChange={handleChange}
                        placeholder="Add table name"
                    />
                </div>

                <div className="modal-buttons-add-new-table">
                    <button className="btn-cancel-add-new-table" onClick={handleClose}>Cancel</button>
                    <button className="btn-add-add-new-table">Add New Table</button>
                </div>

            </div>
        </div>
    );
};

export default Add_New_Table;
