import React from 'react';
import './AllUsers.css';

const AllUsers = ({ allUsers }) => {
  return (
    <>
      {
        allUsers ? (
          <div className="card-container"> {/* Ensure this wrapper is added */}
            {allUsers.map((user) => (
              <div className="user-card" key={user._id}>
                <div className="card-image">
                  <img src={user.avatar ? user.avatar.url : ""} alt="Image Loading" />
                </div>
                <div className="card-info">
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user._id}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>No Users</h2>
        )
      }
    </>
  );
};

export default AllUsers;
