import { useState } from 'react';
import './List_Notification.css';

const List_Notification = () => {
  const [notifications] = useState([
    { message: 'Project A has been updated successfully.', time: '2 minutes ago' },
    { message: 'You received a new message from admin.', time: '10 minutes ago' },
    { message: 'Project B deadline is tomorrow.', time: '1 hour ago' },
  ]);

  return (
    <div className="section-list-notification">
      <div className="container-title-and-path-list-notification">
        <div className="container-title-list-notification">
          <h2>Notification</h2>
        </div>
        <div className="container-path-list-notification">
          <ul className="unordered-list-list-notification">
            <li className="list-list-notification">Users</li>
            <li className="list-list-notification"><span>/</span> project</li>
            <li className="list-list-notification"><span>/</span> notification</li>
          </ul>
        </div>
      </div>

      <div className="container-list-notification">
        <div className="list-notification-header">
          <button className="btn-view-all-list-notification">View All</button>
        </div>

        <div className="notification-list">
            {notifications.map((notif, index) => (
                <div className="list-notification-item">
                  <div className="list-notification-text">
                    <p className="list-notification-message">{notif.message}</p>
                    <span className="list-notification-time">{notif.time}</span>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List_Notification;
