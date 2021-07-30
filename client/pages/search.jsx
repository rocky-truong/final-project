import React from 'react';

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('api/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <>
        <div className="container">
          <h2 className="page-header">Search Results</h2>
          <ul className="result-ul">
            {
              this.state.users.map(user => {
                return (
                  <User
                    key={user.userId}
                    user={user} />
                );
              })
            }
          </ul>
        </div>
      </>
    );
  }
}

function User(props) {
  const { userId } = props.user;
  return (
    <a
    href={`#chats?recipientId=${userId}`}
    className="user-anchor"
    >
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
        <div className="result-ntrp">
          <div className="ntrp-text">
            NTRP
          </div>
          <div className="ntrp-level">
            { props.user.ntrpRating }.0
          </div>
        </div>
      </li>
    </a>
  );
}
