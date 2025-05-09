import React from "react";

const UserDashboard = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mt-4">
      <h1 className="text-center">User Dashboard</h1>
      {user ? (
        <div className="card shadow p-4 mt-4">
          <div className="d-flex align-items-center">
            {/* Profile Picture */}
            <div
              className="profile-picture-container"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/100?text=User" // Default user picture
                  alt="Default User"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
            {/* User Details */}
            <div>
              <h3>{user.username}</h3>
              <p className="text-muted">Category: {user.category || "User"}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-danger">No user data available. Please log in.</p>
      )}
      <div className="mt-4">
        <h2>Recent Activities</h2>
        <ul className="list-group">
          {user && user.activities ? (
            user.activities.map((activity, index) => (
              <li key={index} className="list-group-item">
                {activity}
              </li>
            ))
          ) : (
            <li className="list-group-item">No recent activities found.</li>
          )}
        </ul>
      </div>

      <section className="row">
        <div className="col-md-6 card shadow bg-dark p-3 m-3">
          <p className="text-light">We value your feedback. Please rate us:</p>
          <input type="text" placeholder="Reply with good, bad or moderate" className="text-dark bg-info" />
          <textarea name="" id="" placeholder="Can you please give us a reason, what acn we improve? We value your feedback"></textarea>
        </div>
      </section>

    </div>
  );
};

export default UserDashboard;
