import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="blue">
          <div className="container">
            <div className="header">
              <div className="title">Tennis Buddy</div>
              <div className="links">
                <a className="search-link" href="#">
                  Search
                </a>
                <a className="chats-link">
                  Chats
                </a>
              </div>
              <a className="search-icon" href="#">
                <i className="fas fa-search fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
