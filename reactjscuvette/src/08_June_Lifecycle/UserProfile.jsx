import { useState, useEffect } from "react";

// Fetching data on mount
// Updating document title on state change
// Cleaning up a subscription on unmount

const fetchUserData = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe", age: 30 });
    }, 1000);
  });
};

const subscribeToUser = (userId, callback) => {
  const intervalId = setInterval(() => {
    callback({ id: userId, lastActivity: new Date() });
  }, 5000);
  return () => clearInterval(intervalId);
};

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [lastActivity, setLastActivity] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchUserData(userId).then((data) => {
      if (isMounted) {
        setUser(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [userId]);

  useEffect(() => {
    if (user) {
      document.title = `${user.name}'s Profile`;
    }
  });

  useEffect(() => {
    const unsubscribe = subscribeToUser(userId, (activity) => {
      setLastActivity(activity.lastActivity);
    });
    return () => {
      unsubscribe();
    };
  }, [userId]);

  // Fetching the User Data

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
          <p>
            Last Activity:
            {lastActivity ? lastActivity.toString() : "Loading....."}
          </p>
        </div>
      ) : (
        <p>Loading User Data.....</p>
      )}
    </div>
  );
};

export default UserProfile;
