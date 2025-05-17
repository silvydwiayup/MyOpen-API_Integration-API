import React, { useState, useEffect, useRef } from 'react';
import './Link_Project.css';
import { FaChevronDown } from 'react-icons/fa';

const Link_Project = ({ show, setShow, project }) => {
    const [projectName, setProjectName] = useState('');
    const [showProjectList, setShowProjectList] = useState(false);
    const [apiLink, setApiLink] = useState('');
    const dropdownRef = useRef(null);
    const [copied, setCopied] = useState(false);


    useEffect(() => {
        if (project) {
            setProjectName(project.name);
            setApiLink(`https://api.example.com/project/${project.label}`);
        }
    }, [project]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowProjectList(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!show) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(apiLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    const handleClose = () => setShow(false);

    const mockProjects = [
        { name: 'Project A', label: 1 },
        { name: 'Project B', label: 2 },
        { name: 'Project C', label: 3 },
        { name: 'Project D', label: 4 },
    ];

    const selectProject = (p) => {
        setProjectName(p.name);
        setApiLink(`https://api.example.com/project/${p.label}`);
        setShowProjectList(false);
    };

    return (
        <div className="modal-overlay-link-project">
            <div className="modal-container-link-project">
                <button className="btn-close-link-project" onClick={handleClose}>×</button>
                <h3 className="modal-title-link-project">Link Project</h3>

                <div className="field-inline-link-project">
                    <label className="field-label-link-project-inline">Your Link API</label>
                    <div className="dropdown-wrapper-link-project" ref={dropdownRef}>
                        <button
                            className="btn-select-link-project"
                            onClick={() => setShowProjectList(prev => !prev)}
                        >
                            {projectName || 'Select Project'}
                            <FaChevronDown style={{ marginLeft: '8px' }} />
                        </button>
                        {showProjectList && (
                            <ul className="dropdown-list-link-project">
                                {mockProjects.map((p, idx) => (
                                    <li key={idx} onClick={() => selectProject(p)}>
                                        {p.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="field-group-link-project">
                    <label className="field-label-link-project">API Link</label>
                    <div className="input-copy-wrapper">
                        <input type="text" value={apiLink} readOnly className="field-input-link-project" />
                        <button className="btn-copy-link-project" onClick={handleCopy}>Copy</button>
                    </div>
                </div>
            </div>
                
            {copied && (
                <div className={`copied-toast-link-project ${copied ? 'show' : ''}`}>
                    Link Copied!
                </div>
            )}

        </div>
    );
};

export default Link_Project;
