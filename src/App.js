import logo from './logo.svg';
import './App.css';
import gitimg from './gitimg.png';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')
  const [userData, setUserData] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  console.log(userData);
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className='py-5'>Github Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Github Uber</label>
          <div className='input-group'>
            <input type='text' className='form-control' required value={search} onChange={handleChange} />
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-success'>Search</button>
            </span>
          </div>
        </div>
      </form>
      <div className='py-5'>

        {!userData && (<img src={gitimg} alt='' className='responsive rouded-circle' height='200px' />)}

        {userData && (
          <div>
            <img src={userData.avatar_url} alt='' className='responsive rouded-circle' height='200px' />
            <h1 className='pt-5'><a href={userData.html_url} target='new'> {userData.name}</a></h1>
            <h3>{userData.location}</h3>
            <p> {userData.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
