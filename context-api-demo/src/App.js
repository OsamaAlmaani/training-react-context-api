import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';

export const UserContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserInfo: {
        ID: 1,
        UserName: 'Osama Almaani',
        Dept: 'GIS',
        isAuth: false,
        Permissions: [1,3,4,5],
        CheckPermission: (permissionID) => { return this.state.UserInfo.Permissions.indexOf(permissionID) !== -1 },
        Login: (auth) => this.setState({ UserInfo: {
          ...this.state.UserInfo, isAuth: auth
        }})
      }
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state.UserInfo}>
        <div className='App'>
          <AppBar />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
