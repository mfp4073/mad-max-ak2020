import logo from './logo.svg';
import './App.css';
import UsersContainer from './components/users/UsersContainer'

function App() {

  return (
    <div className="App">
      <UsersContainer/>
    </div>
  );
}

export default App;




// function initApp() {
//   // this is hit API to setState on countries
//   fetchCountries('https://restcountries.eu/rest/v2/region/europe')
//     .then(response => {
//       setCountries(response);
//       setSubregionFilterVal("");
//       setLanguageFilterVal("");
//       setLoading(true);
//       setCachedCountries(response);
//     })
//     .catch(error => {
//       setError(error.message);
//       setLoading(true)
//     })
// }