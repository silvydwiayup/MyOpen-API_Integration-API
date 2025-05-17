import './Information.css';
import logo from '../../../assets/logo/_1D-Logo.webp';

const Information = () => {
    return (
        <Container_Information />
    );
};

const Container_Information = () => {
    return (
        <div className="container-information">
            <div className="section-information">
                <div className="container-right-information">
                    <div className="image-wrapper">
                        <img src={logo} alt="logo-my-open-api" />
                    </div>
                </div>
                <div className="container-left-information">
                    <div className="left-content-intormation">
                        <div className="left-top">
                            <h2>
                                MyOpen API untuk Manajemen Data Aplikasi Secara Efisien dan Terstruktur
                            </h2>
                            <p>
                                Proyek ini dirancang untuk menyediakan antarmuka komunikasi yang efisien antara client dan server dalam pengelolaan data aplikasi. Dengan memanfaatkan arsitektur RESTful, API ini memungkinkan operasi yang mudah, aman, dan cepat diakses. API ini dapat diintegrasikan ke berbagai jenis aplikasi frontend maupun mobile. Proyek ini bertujuan untuk meningkatkan skalabilitas sistem dan mempermudah pengelolaan data melalui endpoint yang terstruktur dan terdokumentasi dengan baik.
                            </p>
                        </div>
                        <div className="left-bottom">
                            <button className="left-bottom" onClick={() => window.open("https://accounts.google.com", "_blank")}>
                                Masuk dengan Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
