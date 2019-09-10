import React, { Component } from 'react';
import { UserContext } from './App';

export default class UserInfo extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userData => (
          <div>
            {userData.isAuth ? (
              <React.Fragment>
                <label style={{ display: 'block' }}>ID: {userData.ID}</label>
                <label style={{ display: 'block' }}>UserName {userData.UserName}</label>
                {
                    userData.CheckPermission(2) ?
                    <label style={{ display: 'block' }}>Dept {userData.Dept}</label> : null
                }
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                <label>Not Authorized</label>
                <button type='button' onClick={() => userData.Login(true)}>
                  Login
                </button>
              </React.Fragment>
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
