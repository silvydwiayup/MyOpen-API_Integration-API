import './Create_Project.css'

const Create_Project = ({}) => {
    return <Container_Create_Project/>;
};

const Container_Create_Project = ({}) => {
    return (
        <div className="section-create-project">
            <div className="container-title-and-path-create-project">
            <div className="container-title-create-project">
                    <h2>Create-Project</h2>
                </div>
                <div className="container-path-create-project">
                    <ul className="unordered-list-create-project">
                        <li className="list-create-project">
                            Users
                        </li>
                        <li className="list-create-project">
                           <span>/</span> project
                        </li>
                        <li className="list-create-project">
                            <span>/</span> create-project
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-create-project">
                <div className="container-body-create-project">
                    <div className="container-top-create-project">
                        <h2>Get Started with Your Project</h2>
                    </div>
                    <div className="container-bottom-create-project">
                        <input type="text" className="name-create-project" placeholder="project-name" />
                        <button 
                            className="btn-create-project" 
                        >
                            Launch Your Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create_Project;