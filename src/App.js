import { useEffect, useState } from 'react';
import SearchField from './components/Search';
import Axios from 'axios';
import { Header } from './components/Header';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [search, setSearch] = useState();
  const [searchTopic, setSearchTopic] = useState('name');

  const handleSearch = ({ target }) => {
    const { value } = target;

    var newFilteredPpl = [];

    for (let i = 0; i < users.length; i++) {
      if (searchTopic === 'dob') {
        if (
          value.toLowerCase() ===
          users[i].dob.date.substring(0, value.length).toLowerCase()
        ) {
          newFilteredPpl.push(users[i]);
        }
      } else if (searchTopic === 'name') {
        if (
          value.toLowerCase() ===
          users[i].name.first.substring(0, value.length).toLowerCase()
        ) {
          newFilteredPpl.push(users[i]);
        }
      } else if (searchTopic === 'email') {
        if (
          value.toLowerCase() ===
          users[i].email.substring(0, value.length).toLowerCase()
        ) {
          newFilteredPpl.push(users[i]);
        }
      } else if (searchTopic === 'phone') {
        if (
          value.toLowerCase() ===
          users[i].cell.substring(0, value.length).toLowerCase()
        ) {
          newFilteredPpl.push(users[i]);
        }
      }
    }

    setFilteredUsers(newFilteredPpl);
  };

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=50&nat=us').then(function (
      ppl
    ) {
      setUsers(ppl.data.results);
    });
  }, []);

  const searchTopicClick = (topic) => {
    setSearchTopic(topic);
  };

  var pplToDisplay = users;
  if (filteredUsers.length > 0) {
    pplToDisplay = filteredUsers;
  }

  var nameStyle = searchTopic === 'name' ? 'text-warning' : '';

  var dobStyle = searchTopic === 'dob' ? 'text-warning' : '';

  var emailStyle = searchTopic === 'email' ? 'text-warning' : '';

  var phoneStyle = searchTopic === 'phone' ? 'text-warning' : '';

  return (
    <>
      <div className="App">
        <Header />
        <SearchField handleSearch={handleSearch} />
      </div>
      <div className="d-flex justify-content-center container bg-dark ">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th
                scope="col"
                onClick={() => {
                  searchTopicClick('name');
                }}
                className={nameStyle}
              >
                Name
              </th>
              <th
                scope="col"
                onClick={() => {
                  searchTopicClick('phone');
                }}
                className={phoneStyle}
              >
                Phone
              </th>
              <th
                scope="col"
                onClick={() => {
                  searchTopicClick('email');
                }}
                className={emailStyle}
              >
                Email
              </th>
              <th
                scope="col"
                onClick={() => {
                  searchTopicClick('dob');
                }}
                className={dobStyle}
              >
                DOB
              </th>
            </tr>
          </thead>
          <tbody>
            {pplToDisplay.map((user, i) => (
              <tr key={i}>
                <th scope="row">
                  <img
                    className="img-thumbnail"
                    src={user.picture.medium}
                    alt="employee on row"
                  />
                </th>
                <td>{user.name.first + ' ' + user.name.last}</td>
                <td>{user.cell}</td>
                <td>{user.email}</td>
                <td>{user.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
