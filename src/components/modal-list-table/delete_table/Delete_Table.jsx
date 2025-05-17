import './Delete_Table.css'
import { SlClose } from "react-icons/sl";

const Delete_Table = ({ table, setShow, handleDelete }) => {
  return (
    <div className="modal-overlay-delete-table">
      <div className="modal-container-delete-table">
        <button className="btn-close-delete-table" onClick={() => setShow(false)}>
          &times;
        </button>

        <div className="delete-icon-wrapper-delete-table">
          <SlClose className="delete-icon-table" />
        </div>

        <h3 className="modal-title-delete-table">Are You Sure?</h3>
        <p className="modal-description-delete-table">
          Do you really want to delete <strong>{table?.name}</strong>? 
        </p>

        <div className="modal-footer-delete-table">
          <button className="btn-confirm-delete-table" onClick={handleDelete}>Yes, delete it!</button>
          <button className="btn-cancel-delete-table" onClick={() => setShow(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Delete_Table;
