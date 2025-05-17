import './Top_Navbar.css';
import { FiBell, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Top_Navbar = ({ user }) => {
    return <Container_Top_Navbar user={user} />;
  };

const Container_Top_Navbar = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notifRef = useRef(null);
  const iconRef = useRef(null);
  const profileRef = useRef(null);

  const notifList = [
    'Kamu punya 2 pesan baru',
    'Sistem akan maintenance malam ini',
    'Proses berhasil dijalankan',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowNotif(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="top-navbar">
      <div
        className="container-icon-top-navbar"
        onClick={() => setShowNotif(!showNotif)}
        ref={iconRef}
      >
        {notifList.length > 0 && (
          <span className="dot-badge-top-navbar">{notifList.length}</span>
        )}
        <FiBell className="icon-top-navbar" />
      </div>

      {showNotif && (
        <div className="notif-container-top-navbar" ref={notifRef}>
          <p className="notif-header--top-navbar">Notifikasi</p>
          <ul className="notif-list-top-navbar">
            {notifList.map((item, index) => (
              <li key={index} className="notif-item-top-navbar">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="container-profile-top-navbar"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
        ref={profileRef}
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img-top-navbar"
        />

        {showProfileMenu && (
          <div className="profile-dropdown-top-navbar">
            <div className="profile-header-top-navbar">
                <img src="https://i.pravatar.cc/60" alt="user" className="dropdown-avatar-top-navbar" />
                <div>
                    <p className="dropdown-email-top-navbar">adamjoe@email.com</p>
                </div>
            </div>

            <ul className="dropdown-menu-top-navbar">
                <li>
                  <Link to="/profile" className="dropdown-link">
                      <FiUser className="menu-icon-top-navbar" />
                      Lihat Profil
                  </Link>
                </li>
                {/* <li>
                  <Link to="/pengaturan" className="dropdown-link">
                    <FiSettings className="menu-icon-top-navbar" />
                    Pengaturan
                  </Link>
                </li> */}
                <li>
                    <FiLogOut className="menu-icon-top-navbar" />
                    Logout
                </li>
            </ul>

          </div>
        )}
      </div>
    </div>
  );
};

export default Top_Navbar;
