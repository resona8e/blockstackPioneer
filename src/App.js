import React, { Component } from 'react';
import 'stylesheets/main.scss';
import { Button } from 'react-bulma-components';
import { appConfig } from 'utils/constants';
import { UserSession } from 'blockstack'
import Login from 'components/Login'
class App extends Component {
  state = {
    userSession: new UserSession({ appConfig })
  }


  componentDidMount = async () => {
    const { userSession } = this.state

    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn()

      if (!userData.username) {
        throw new Error("This app requires a username")
      }

      window.location = "/"

    }
  }

  handleSignOut = () => {
    const { userSession } = this.state
    userSession.redirectToSignOut()
    window.location = "/"
  }

  render() {
    const { userSession } = this.state
    return (
      <div className="App">
      {
        userSession.isUserSignedIn() ?
        <Button color="primary" onClick={this.handleSignOut}>
        Sign Out
        </Button>:
        <Login userSession={userSession} />
        
      } 
        
        
        
      </div>
    );
  }
}

export default App;
