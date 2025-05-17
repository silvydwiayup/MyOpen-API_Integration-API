import { useEffect, useRef, useState } from 'react';
import { FaRegTrashAlt, FaPen, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./List_Table.css";
import Delete_Table from '../../components/modal-list-table/delete_table/Delete_Table';
import Edit_Table from '../../components/modal-list-table/edit_table/Edit_Table';
import Add_New_Table from '../../components/modal-list-table/add_new_table/Add_New_Table';

const ListTable = () => {
    return <Container_List_Table />;
};

const Container_List_Table = () => {

    const navigate = useNavigate();

    const list_table = [
        { label: 1, id_project: 1, name: "User", created_at: "2025-04-10", updated_at: "2025-04-10", toggle: true },
        { label: 2, id_project: 1, name: "Email", created_at: "2025-04-09", updated_at: "2025-04-10", toggle: false },
        { label: 1, id_project: 2, name: "username", created_at: "2025-04-10", updated_at: "2025-04-10", toggle: true },
        { label: 1, id_project: 3, name: "products", created_at: "2025-04-10", updated_at: "2025-04-10", toggle: true },
        { label: 2, id_project: 3, name: "products sold", created_at: "2025-04-10", updated_at: "2025-04-10", toggle: true },
    ];

    const list_project = [
        { id_project: 1, name: "Project 1" },
        { id_project: 2, name: "Project 2" },
        { id_project: 3, name: "Project 3" },
        { id_project: 4, name: "Project 4" },
    ];

    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);

    const [showAddModal, setShowAddModal] = useState(false);



    useEffect(() => {
        const maxId = Math.max(...list_project.map(p => p.id_project));
        setSelectedProjectId(maxId);
    }, []);

    const filteredTable = list_table.filter(item => item.id_project === selectedProjectId);

    return (
        <div className="section-list-table">
            <div className="container-title-and-path-list-table">
                <div className="container-title-list-table">
                    <h2>List-Table</h2>
                </div>
                <div className="container-path-list-table">
                    <ul className="unordered-list-list-table">
                        <li className="list-list-table">Users</li>
                        <li className="list-list-table"><span>/</span> project</li>
                        <li className="list-list-table"><span>/</span> list-project</li>
                        <li className="list-list-table"><span>/</span> list-table</li>
                    </ul>
                </div>
            </div>

            <div className="list-table-header">
                <div className="list-table-header-top">
                    <h3>List-Table</h3>
                    <Dropdown 
                        list_project={list_project} 
                        onSelect={setSelectedProjectId} 
                        selectedProjectId={selectedProjectId} 
                    />
                </div>
                <div className="list-table-header-bottom">
                    <button className="btn-create-list-table" onClick={() => setShowAddModal(true)}>
                        Add New Table
                    </button>
                </div>
                
            </div>

            <div className="container-list-table-body">
                <div className="table-scroll-wrapper">
                    <table className="table-list-table-body">
                        <thead className="table-thead-list-table">
                            <tr className="table-row-head-list-table-body">
                                <th className="table-head-list-table-body">Label</th>
                                <th className="table-head-list-table-body">Table Name</th>
                                <th className="table-head-list-table-body">Create On</th>
                                <th className="table-head-list-table-body">Edit On</th>
                                <th className="table-head-list-table-body">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-tbody-list-table">
                            {filteredTable.length > 0 ? filteredTable.map((item, index) => (
                                <tr key={index} className="table-row-data-list-table-body">
                                    <td className="table-data-list-table">{item.label}</td>
                                    <td className="table-data-list-table">{item.name}</td>
                                    <td className="table-data-list-table">{item.created_at}</td>
                                    <td className="table-data-list-table">{item.updated_at}</td>
                                    <td className="table-data-list-table">
                                        <div className="table-data-container-icon-list-table">
                                            <button 
                                                className="btn-icon-list-table"
                                                onClick={() => {
                                                    setSelectedTable(item); 
                                                    setShowDeleteModal(true); 
                                                }}
                                                >
                                                <FaRegTrashAlt className="icon-table-data-list-table danger-color-list-table" />
                                            </button>

                                            <button
                                                className="btn-icon-list-table"
                                                onClick={() => {
                                                    setShowEditModal(true);
                                                }}
                                            >
                                                <FaPen className="icon-table-data-list-table edit-color-list-table" />
                                            </button>

                                            <button
                                                className="btn-icon-list-table"
                                                onClick={() => navigate(`/table/list-object/${item.name.toLowerCase().replace(/\s+/g, '-')}`)}
                                                >
                                                <FaArrowRight className="icon-table-data-list-table primary-color-list-table" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="table-data-list-table" style={{ textAlign: 'center' }}>
                                        Tidak ada data
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="list-table-bottom"></div>

            {showDeleteModal && (
                <Delete_Table
                    table={selectedTable}
                    setShow={setShowDeleteModal}
                    handleDelete={() => {
                        console.log("Delete table:", selectedTable);
                        setShowDeleteModal(false);
                    }}
                />
            )}

            {showEditModal && (
                <Edit_Table
                    onClose={() => setShowEditModal(false)}
                />
            )}

            {showAddModal && (
            <Add_New_Table
                show={showAddModal}
                setShow={setShowAddModal}
            />
            )}


        </div>

  
    );
};

const Dropdown = ({ list_project, onSelect, selectedProjectId }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);
    const handleSelect = (id) => {
        onSelect(id);
        setOpen(false);
    };

    const selectedProject = list_project.find(p => p.id_project === selectedProjectId);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="dropdown-list-table" ref={dropdownRef}>
            <button className="dropdown-button-list-table" onClick={toggleDropdown}>
                {selectedProject ? selectedProject.name : 'Pilih Project'}
            </button>
            {open && (
                <div className="dropdown-menu-list-table">
                    {list_project
                        .filter(project => project.id_project !== selectedProjectId)
                        .map((project) => (
                            <a
                                key={project.id_project}
                                className="list-table-menu-a"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSelect(project.id_project);
                                }}
                            >
                                {project.name}
                            </a>
                        ))}
                </div>
            )}
        </div>
    );
};

export default ListTable;
