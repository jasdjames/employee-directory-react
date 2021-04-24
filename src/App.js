import { useEffect, useState } from 'react';
// import { API } from './data/API';
import { NavBar } from './components';
import SearchField from './components/Search';
// import userList from './data/userList.json';
import Axios from 'axios';

// const handleSearch = async () => {
//   const results = await API.search(search);
//   const { userData } = await results.json();
//   setItems([...userData]);
// };

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState();
  const [searchTopic, setSearchTopic] = useState('name');

  const handleSearch = ({ target }) => {
    const { value } = target;
    console.log('what wer r typing', value);

    var newFilteredPpl = [];

    for (let i = 0; i < users.length; i++) {
      console.log('Letter to compare', users[i].name.first.substring(0, 1));

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
      }
    }
    console.log('new filtered ppl', newFilteredPpl);
    setFilteredUsers(newFilteredPpl);
    // setSearch(value);
    // if (!search) setUsers(users);
    // else {
    //   const filteredUsers = users.filter((user) => {
    //     return user.name.includes(value) || user.email.includes(value);
    //   });
    //   setUsers(filteredUsers);
    // }
  };

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=50&nat=us').then(function (
      ppl
    ) {
      console.log('ppl', ppl);
      setUsers(ppl.data.results);
    });
  }, []);

  const searchTopicClick = (topic) => {
    setSearchTopic(topic);
  };
  // const handleSearch = async ({ target }) => {
  //   const results = await API.search(search);
  //   const { userData } = await results.json();
  //   const { value } = target;
  //   setUsers([...userData]);
  //   setSearch(value);

  //   if (!search) setUsers(userData);
  //   else {
  //     const filterUserData = userData.filter((user) => {
  //       return user.results.name.includes(value) || user.email.includes(value);
  //     });
  //     setUsers(filterUserData);
  //   }
  // };
  console.log(' USER STATE', users);
  console.log(' FILTERED USER STATE', filteredUsers);
  console.log(' SERAFCH TOPIC STATE', searchTopic);

  var pplToDisplay = users;
  if (filteredUsers.length > 0) {
    pplToDisplay = filteredUsers;
  }

  var nameStyle = searchTopic === 'name' ? 'text-warning' : '';

  var dobStyle = searchTopic === 'dob' ? 'text-warning' : '';

  return (
    <>
      <div className="App">
        <h1 className="text-center text-success m-3">Employee Directory </h1>
      </div>
      <div className="text-center"> Header </div>
      <div>
        <SearchField handleSearch={handleSearch} />
      </div>
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
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
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
              <th scope="row" key={user.uuid}></th>
              <td>{user.name.first + ' ' + user.name.last}</td>
              <td>{user.cell}</td>
              <td>{user.email}</td>
              <td>{user.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
