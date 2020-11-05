import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersContainer(props) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  let mainContent

  useEffect(() => {
    initApp();
  }, []);

  function initApp() {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setCountries(response.data);
        setLoading(true);
      })
      .catch(error => {
        setError(error.message);
        setLoading(true)
      })
  }

  // function initApp() {
  //   console.log("init")
  //   fetchCountries('http://localhost:5000/users')
  //     .then(response => {
  //       console.log("response: ", response);
  //     })
  //     .then(response => {
  //       setCountries(response);
  //       setLoading(true);
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //       setLoading(true)
  //     })
  // }

  if (loading) {
    console.log("loading: ", countries)
    renderCountries(countries);
  } else {
    console.log("not loading: ", countries)
    renderLoader();
  }

  function renderCountries(countries) {
    mainContent =
      <div className="countries-container">{error ? <div>{error.message}</div> :
        countries.
          map((country) =>
            <div key={country.id}>{country.name}</div>
          )}
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
