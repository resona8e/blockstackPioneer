import React, { Component } from 'react'
import { Card, Content, Button } from 'react-bulma-components'

export default class Login extends Component {
    state = {
        loading: false
    }
   handleSignIn = (e) => {
        const { userSession } = this.props
        e.preventDefault()
        userSession.redirectToSignIn()
        this.setState({ loading:true })
    }
   
    render() {
        const { loading } = this.state
    
        return (
          <Card>
            <Card.Content>
              <Content>
                {
                  loading ? <div>Alomst there!</div> :
                  <Button color="primary" onClick={this.handleSignIn}>
                    Sign in with Blockstack
                  </Button>
                }
              </Content>
            </Card.Content>
          </Card>
        )
      }
    }