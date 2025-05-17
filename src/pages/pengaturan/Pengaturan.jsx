import './Pengaturan.css'

const Pengaturan = ({}) => {
    return (
        <Container_Pengaturan/>
    );
}

const Container_Pengaturan = ({}) => {
    return(
        <div className="section-pengaturan">
            <div className="container-title-and-path-pengaturan">
                <div className="container-title-pengaturan">
                    <h2>Pengaturan</h2>
                </div>
                <div className="container-path-pengaturan">
                    <ul className="unordered-list-pengaturan">
                    <li className="list-pengaturan">Users</li>
                    <li className="list-pengaturan"><span>/</span> notification</li>
                    <li className="list-pengaturan"><span>/</span> pengaturan</li>
                    </ul>
                </div>
            </div>

            <div className="container-body-pengaturan">
                <div className="pengaturan-card">
                    <h3>Profile</h3>
                </div>
                <div className="pengaturan-card">
                    <h3>Keamanan</h3>
                </div>
                <div className="pengaturan-card">
                    <h3>Preferensi</h3>
                </div>
                <div className="pengaturan-card">
                    <h3>Notifikasi</h3>
                </div>
            </div>

        </div>
    );
}

export default Pengaturan;