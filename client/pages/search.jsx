import React from 'react';

function User(props) {
  return (
    <li>
      { props.user.name }
    </li>
  );
}

function UserList(props) {
  return (
  <ul>
    {
      props.users.map(user => {
        return (
          <User
            key={user.userId}
            user={user} />
        );
      })
    }
  </ul>
  );
}

export default UserList;
