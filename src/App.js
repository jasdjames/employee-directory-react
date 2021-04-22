import { useState } from 'react';
import { API } from './data/API';
import { NavBar, TableBody } from './components';
import { SearchField } from './components/Search';

const userData = API;
export const App = () => {
  const [users, setUsers] = useState(userData);
  const [search, setSearch] = useState('');

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearch(value);
    if (!search) setUsers(userData);
    else {
      const filterUserData = userData.filter((user) => {
        return user.results.name.includes(value) || user.email.includes(value);
      });
      setUsers(filterUserData);
    }
  };

  return (
    <>
      <div className="App">
        <h1 className="text-center text-success m-3">Employee Directory </h1>
      </div>
      <div className="text-center"> Header </div>
      <div>
        <NavBar>
          <SearchField value={search} handleChange={handleSearch} />
        </NavBar>
      </div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody key={user.results.id.value}>
            <TableBody
              images={user.results.picture.thumbnail}
              names={user.results.name}
              phones={user.results.phone}
              emails={user.results.email}
              dobs={user.results.dob}
            />
          </tbody>
        ))}
      </table>
    </>
  );
};
