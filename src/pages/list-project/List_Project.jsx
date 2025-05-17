import "./List_Project.css";
import React, { useEffect, useRef, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import Add_New_Project from "../../components/modal-list-projects/add_new_project/Add_New_Project";
import Edit_Project from "../../components/modal-list-projects/edit_project/Edit_Project";
import Link_Project from "../../components/modal-list-projects/link_project/Link_Project";
import Delete_Project from "../../components/modal-list-projects/delete_project/Delete_Project";



const ListProject = () => {
    return <ContainerListProject />;
};

const ContainerListProject = () => {
    
    const [showModal, setShowModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

    const [showLinkModal, setShowLinkModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);



    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
    const [activeDropdown, setActiveDropdown] = useState(null);
    const iconRefs = useRef([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = (index, direction = "left") => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            const rect = iconRefs.current[index].getBoundingClientRect();
            const dropdownWidth = 120;

            let top = rect.bottom + window.scrollY;
            let left = 0;

            if (direction === "right") {
                left = rect.right + window.scrollX;
            } else if (direction === "left") {
                left = rect.left - dropdownWidth - 0 + window.scrollX;
            }

            setDropdownPos({ top, left });
            setActiveDropdown(index);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickInsideDropdown = dropdownRef.current?.contains(event.target);
            const isClickOnIcon = iconRefs.current.some((ref) => ref?.contains(event.target));

            if (!isClickInsideDropdown && !isClickOnIcon) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const list_projects = [
        {
            label: 1,
            name: "Project A",
            created_at: "2025-04-10",
            updated_at: "2025-04-10",
            status: "Active",
            toggle: true
        },
        {
            label: 2,
            name: "Project B",
            created_at: "2025-04-09",
            updated_at: "2025-04-10",
            status: "Inactive",
            toggle: false
        },
    ];

    return (
        <div className="section-list-project">
            <div className="container-title-and-path-list-project">
                <div className="container-title-list-project">
                    <h2>List-Project</h2>
                </div>
                <div className="container-path-list-project">
                    <ul className="unordered-list-list-project">
                        <li className="list-list-project">
                            Users
                        </li>
                        <li className="list-list-project">
                           <span>/</span> project
                        </li>
                        <li className="list-list-project">
                            <span>/</span> list-project
                        </li>
                    </ul>
                </div>
            </div>
            <div className="list-project-header">
                <h3>List Project</h3>
                <button
                    className="btn-create-list-project"
                    onClick={() => setShowModal(true)}
                >
                    Add New Project
                </button>

                <Add_New_Project show={showModal} setShow={setShowModal} />
            </div>
            <div className="container-list-project-body">
                <div className="table-scroll-wrapper">
                    <table className="table-list-project-body">
                        <thead className="table-thead-list-project">
                            <tr className="table-row-head-list-project-body">
                                <th className="table-head-list-project-body">Label</th>
                                <th className="table-head-list-project-body">Project Name</th>
                                <th className="table-head-list-project-body">Create On</th>
                                <th className="table-head-list-project-body">Edit On</th>
                                <th className="table-head-list-project-body">Status</th>
                                <th className="table-head-list-project-body">Toggle</th>
                                <th className="table-head-list-project-body">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-tbody-list-project">
                            {list_projects.map((item, index) => (
                                <tr key={index} className="table-row-data-list-project-body">
                                    <td className="table-data-list-project">{item.label}</td>
                                    <td className="table-data-list-project">{item.name}</td>
                                    <td className="table-data-list-project">{item.created_at}</td>
                                    <td className="table-data-list-project">{item.updated_at}</td>
                                    <td className="table-data-list-project">{item.status}</td>
                                    <td className="table-data-list-project">
                                        <label className="switch-table-list-project">
                                            <input type="checkbox" defaultChecked={item.toggle} />
                                            <span className="slider-round-table-list-project"></span>
                                        </label>
                                    </td>
                                    <td className="table-data-list-project">
                                        <div
                                            className="icon-container"
                                            ref={(el) => (iconRefs.current[index] = el)}
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            <FaEllipsisH className="center-icon" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Edit_Project show={showEditModal} setShow={setShowEditModal} />
                    <Link_Project show={showLinkModal} setShow={setShowLinkModal} />
                    <Delete_Project show={showDeleteModal} setShow={setShowDeleteModal} project={selectedProject} />
                </div>
            </div>

            {activeDropdown !== null && (
                <div
                    className="dropdown-outside"
                    ref={dropdownRef}
                    style={{
                        position: "absolute",
                        top: `${dropdownPos.top}px`,
                        left: `${dropdownPos.left}px`,
                    }}
                >
                    <ul>
                        <li
                            onClick={() => {
                            setShowEditModal(true);
                            setSelectedProject(list_projects[activeDropdown]); 
                            setActiveDropdown(null); 
                            }}
                        >
                            Edit
                        </li>
                        <li
                            onClick={() => {
                                setSelectedProject(list_projects[activeDropdown]); 
                                setShowLinkModal(true); 
                                setActiveDropdown(null); 
                            }}
                            >
                            Link
                        </li>

                        <li
                            onClick={() => {
                                setSelectedProject(list_projects[activeDropdown]); 
                                setShowDeleteModal(true); 
                                setActiveDropdown(null); 
                            }}
                            >
                            Delete
                        </li>

                    </ul>

                </div>
            )}
            <div className="list-project-bottom"></div>
        </div>
    );
};

export default ListProject;
