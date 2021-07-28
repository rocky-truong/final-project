import React from 'react';

function User(props) {
  return (
    <li className="result-li">
      <div>
        <img src="images/tennisBall.png" className="tennis-ball" alt="tennis ball" />
      </div>
      <div>
        <div className="result-name">
          { props.user.name }
        </div>
        <div className="result-city">
          { props.user.city }
        </div>
      </div>
      <div>
        <div className="result-ntrp">
          NTRP { props.user.ntrpRating }.0
        </div>
      </div>
    </li>
  );
}

function UserList(props) {
  return (
    <>
      <h2 className="page-header">Search Results</h2>
      <ul className="result-ul">
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
    </>
  );
}

export default UserList;
