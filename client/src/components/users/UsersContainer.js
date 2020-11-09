import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonutChart from '../DonutChart/DonutChart'

function UsersContainer(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  let mainContent

  useEffect(() => {
    initApp();
  }, []);

  function initApp() {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
        setLoading(true);
      })
      .catch(error => {
        setError(error.message);
        setLoading(true)
      })
  }

  if (loading) {
    console.log("loading: ", users)
    renderUsers(users);
  } else {
    console.log("not loading: ", users)
    renderLoader();
  }

  function renderUsers(users) {
    mainContent =
      <div className="users-container">{error ? <div>{error.message}</div> :
        users.map((user) =>
            <div key={user.id}>{user.name}</div>
          )}
      </div>;
  }

  function renderLoader() {
    return <div>Loading...</div>
  }

  return (
    <div className="app-container">
      <DonutChart users={users} />
      {mainContent}
    </div>
  );
};

export default UsersContainer
