import React from 'react';
import './Edit_Table.css';

const Edit_Table = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="modal-overlay-edit-table"
      onClick={handleClose}   
    >
      <div
        className="modal-content-edit-table"
        onClick={e => e.stopPropagation()} 
      >
        <button
          className="btn-close-top-right-edit-table"
          onClick={handleClose}
        >
          ×
        </button>
        <h3>Edit table</h3>

        <div className="input-group-edit-table">
          <label htmlFor="tableName-edit-table">Edit table Name</label>
          <input
            id="tableName-edit-table"
            type="text"
            placeholder="Edit table name"
          />
        </div>

        <div className="modal-buttons-edit-table">
          <button
            className="btn-close-edit-table"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="btn-save-edit-table">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit_Table;