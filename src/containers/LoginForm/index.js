import React, { Component } from 'react';
import { Button, Card, CardSection, FormField } from '../../components';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
        <Card>
          <CardSection>
            <FormField
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="e.g. example@example.com"
                autoCapitalize="none"
                label="E-mail"
            />
          </CardSection>

          <CardSection>
            <FormField
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                label="Password"
                secureTextEntry
            />
          </CardSection>

          <CardSection>
            <Button>
              Log in
            </Button>
          </CardSection>
        </Card>
    );
  }
}
