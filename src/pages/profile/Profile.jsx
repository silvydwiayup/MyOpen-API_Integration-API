import './Profile.css'

import ProfilDummy from '../../assets/profile/img-dummy.webp';

const Profile = ({}) => {
    return(
        <Container_Profile/>
    );
}

const Container_Profile = () => {
    return (
        <div className="section-profile">
            <div className="container-title-and-path-profile">
                <div className="container-title-profile">
                    <h2>Profile</h2>
                </div>
                <div className="container-path-profile">
                    <ul className="unordered-list-profile">
                    <li className="list-profile">Users</li>
                    <li className="list-profile"><span>/</span> notification</li>
                    <li className="list-profile"><span>/</span> profile</li>
                    </ul>
                </div>
            </div>
  
            <div className="container-body-profile">
                <div className="container-left-profile">
                    <div className="container-image-wrapper">
                        <img
                            src={ProfilDummy}
                            alt="Foto Profil"
                            className="profile-image"
                            />
                    </div>
                </div>

                <div className="container-right-profile">
                    <div className="profile-field">
                        <label>Nama Depan</label>
                        <input type="text" value="Silvy" readOnly />
                    </div>
                    <div className="profile-field">
                        <label>Nama Belakang</label>
                        <input type="text" value="Puspita" readOnly />
                    </div>
                    <div className="profile-field">
                        <label>Email</label>
                        <input type="email" value="silvydwiap88@gmail.com" readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};
  

export default Profile;