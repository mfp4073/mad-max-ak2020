import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersContainer(props) {
  const [countries, setCountries] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCountries = (endpoint) => {
    return new Promise((resolve, reject) => {
      axios.get(endpoint).then(response => {
        resolve(response.data);
      }).catch(error => reject(error));
    });
  };

  let mainContent



  function initApp() {
    // this is hit API to setState on countries
    fetchCountries('http://localhost:5000/')
      .then(response => {
        setCountries(response);
        setLoading(true);
      })
      .catch(error => {
        setError(error.message);
        setLoading(true)
      })
  }

  //on load
  useEffect(() => {
    initApp();
  },);



  if (loading) {
    renderCountries(countries);
  } else {
    renderLoader();
  }

  function renderCountries(countries) {
    mainContent =
      <div className="countries-container">{error ? <div>{error.message}</div> : countries}
      </div>;
  }

  function renderLoader() {
    return <div>Loading...</div>
  }


  return (
    <div className="app-container">
      {mainContent}
    </div>
  );
};

export default UsersContainer
